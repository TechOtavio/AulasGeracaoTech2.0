import express from 'express'
import cors from 'cors'
import mysql from 'mysql2'
import jwt from 'jsonwebtoken'

const senhaJWT = '1234' // Em produção, use variável de ambiente

const app = express()
app.use(cors())
app.use(express.json())

const porta = 3000

// Conexão com o MySql
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'sistema_gestao_escolar'
})

conexao.connect((erro) => {
    if (erro) {
        console.log(`Erro ao conectar com o banco: ${erro}`)
    } else {
        console.log('Banco conectado com sucesso!')
    }
})

// Middleware para autenticação JWT
function autenticarUsuario(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
        return res.status(401).json({ msg: 'Token não fornecido' })
    }

    try {
        const usuario = jwt.verify(token, senhaJWT)
        req.usuario = usuario
        next()
    } catch (error) {
        return res.status(403).json({ msg: 'Token inválido' })
    }
}

app.get('/', (req, res) => {
    res.send('Servidor rodando')
})

// Login sem bcrypt - comparação simples de senha
app.post('/verificarLogin', (req, res) => {
  const { email, senha } = req.body

  const sql = 'SELECT * FROM usuarios WHERE email = ?'
  conexao.query(sql, [email], (erro, resultados) => {
    if (erro) {
      console.error(erro)
      return res.status(500).json({ erro: "Erro no servidor" })
    }

    if (resultados.length === 0) {
      return res.status(401).json({ erro: "Usuário ou senha inválidos" })
    }

    const usuario = resultados[0]

    if (senha !== usuario.senha) {
      return res.status(401).json({ erro: "Usuário ou senha inválidos" })
    }

    const token = jwt.sign({
      id: usuario.id,
      nome: usuario.nome,
      tipo: usuario.tipo_usuario
    }, senhaJWT, { expiresIn: '1h' })

    return res.status(200).json({
      token,
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        tipo: usuario.tipo_usuario
      }
    })
  })
})

app.get('/dadosProfessor', autenticarUsuario, (req, res) => {
    return res.send('API professores')
})

// Busca alunos vinculados a um professor e disciplina
app.get('/trazerAlunos/:id_prof/:id_disp', autenticarUsuario, (req, res) => {
    const id_prof = req.params.id_prof
    const id_disp = req.params.id_disp

    const sql = `
        SELECT Usuarios.nome, Usuarios.id
        FROM Usuarios
        JOIN Alunos_Disciplinas ON Usuarios.id = Alunos_Disciplinas.aluno_id
        JOIN Professores_Disciplinas ON Alunos_Disciplinas.disciplina_id = Professores_Disciplinas.disciplina_id
        WHERE Professores_Disciplinas.professor_id = ?
          AND Usuarios.tipo_usuario = 'aluno'
          AND Professores_Disciplinas.disciplina_id = ?
    `

    conexao.query(sql, [id_prof, id_disp], (erro, resposta) => {
        if (erro) {
            console.error(erro)
            return res.status(500).json({ erro: 'Erro no servidor' })
        }
        return res.status(200).json(resposta)
    })
})

// Verifica se professor tem turma relacionada
app.get('/verificarTurma/:id_prof/:id_turma', autenticarUsuario, (req, res) => {
    const { id_prof, id_turma } = req.params;

    const sql = `
        SELECT DISTINCT Turmas.id, Turmas.nome, Turmas.ano
        FROM Turmas
        JOIN Alunos_Turmas ON Turmas.id = Alunos_Turmas.turma_id
        JOIN Alunos_Disciplinas ON Alunos_Turmas.aluno_id = Alunos_Disciplinas.aluno_id
        JOIN Professores_Disciplinas ON Alunos_Disciplinas.disciplina_id = Professores_Disciplinas.disciplina_id
        WHERE Professores_Disciplinas.professor_id = ?
          AND Turmas.id = ?
    `;

    conexao.query(sql, [id_prof, id_turma], (erro, resultado) => {
        if (erro) {
            console.error('Erro ao verificar turma:', erro);
            return res.status(500).json({ erro: 'Erro ao consultar turma' });
        }

        if (resultado.length > 0) {
            return res.status(200).json({ ok: true, turma: resultado[0] });
        } else {
            return res.status(404).json({ ok: false, msg: 'Turma não relacionada ao professor informado.' });
        }
    });
});

// Inserção de frequência
app.post('/lancarFrequencia', autenticarUsuario, (req, res) => {
    const { id_professor, id_turma, frequencias } = req.body;

    if (!Array.isArray(frequencias) || frequencias.length === 0) {
        return res.status(400).json({ ok: false, msg: 'Frequências inválidas ou vazias.' });
    }

    let erros = []
    let insercoes = 0

    frequencias.forEach(({ id_aluno, status }) => {
        conexao.query(
            'INSERT INTO frequencia (id_professor, id_turma, id_aluno, status) VALUES (?, ?, ?, ?)',
            [id_professor, id_turma, id_aluno, status],
            (erro, resultados) => {
                insercoes++
                if (erro) {
                    console.error('Erro ao inserir frequência:', erro);
                    erros.push(erro)
                }
                if (insercoes === frequencias.length) {
                    if (erros.length > 0) {
                        return res.status(500).json({ ok: false, msg: 'Erro ao registrar algumas frequências.' })
                    } else {
                        return res.status(200).json({ ok: true, msg: 'Frequência registrada com sucesso.' })
                    }
                }
            }
        );
    });
});

app.listen(porta, () => {
    console.log(`O servidor está rodando na porta ${porta}`)
})
