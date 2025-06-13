import express from 'express'
import mysql from 'mysql2'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'


dotenv.config()
const App = express()
const Porta = process.env.DB_PORTA
App.use(express.json())

// Conexão com o BD
const Conexão = mysql.createConnection({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER, 
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_NAME})





//  Rota com BD
Conexão.connect((erro) => {
    if(erro){
        console.log(`Erro ao conectar com o Banco de Dados, Erro: ${erro}!`)
    }else{
        console.log(`Banco conectado com sucesso!`)
    }
})

App.post('/cadastrarUsuario', async (req, res) => {
    let novoUsuario = req.body
    console.log(novoUsuario)
    novoUsuario.senha = await bcrypt.hash(novoUsuario.senha, 10)

    let sql = `insert into usuarios (username, senha, nome, ativo, tipo) 
                values (
                '${novoUsuario.username}', 
                '${novoUsuario.senha}', 
                '${novoUsuario.nome}', 
                ${novoUsuario.ativo}, 
                '${novoUsuario.tipo}'
                )`

    Conexão.query(sql, (erro, result) => {
        if(erro){
            console.log(`Erro: ${erro}`)   
        }else{
            return res.send('Usuario cadastrado com sucesso!')
        }
    })
})









App.get('/TesteRota', (req, res) => {
    let sql = `select * from usuarios`
    Conexão.query(sql, (erro, result) => {
        if(erro){
            console.log(`Erro: ${erro}`)   
        }else{
            console.log(result)
            return res.send(result)
        }
    })
})

App.get('/professoresCadastrado', (req, res) => {
    let sql = `select * from professores`
    Conexão.query(sql, (erro, result) => {
        if(erro){
            console.log(`Erro: ${erro}`)
        }else{
            return res.json(result)
        }
    })
})

// Questão 01
App.get('/AtividadeProfessor', (req, res) => {
    let sql = `
        SELECT u.nome AS Professor, d.nome AS Disciplina
        FROM usuarios u
        JOIN professores p ON p.usuario_id = u.id
        JOIN disciplinas d ON d.professor_id = p.id;
    `;

    Conexão.query(sql, (erro, result) => {
        if (erro) {
            console.log(`Erro: ${erro}`);
            return res.status(500).json({ erro: 'Erro ao consultar professores' });
        }

        // Agrupar disciplinas por professor
        const professoresMap = {};

        result.forEach(row => {
            const { Professor, Disciplina } = row;
            if (!professoresMap[Professor]) {
                professoresMap[Professor] = {
                    Professor,
                    Disciplinas: []
                };
            }
            professoresMap[Professor].Disciplinas.push(Disciplina);
        });

        const professores = Object.values(professoresMap);
        return res.json(professores);
    });
});


// Questão 02


App.get('/', (req, res) => {
    res.json()
})

App.listen(Porta, ()=> {
    console.log(`Servidor rodando na porta: ${Porta}`)
})