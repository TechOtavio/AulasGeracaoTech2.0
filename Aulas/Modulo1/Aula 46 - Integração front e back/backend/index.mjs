import express from 'express'
import cors from 'cors'
import mysql from 'mysql2'

const app = express()
const porta = 3000

// MiddleWare
app.use(express.json())
app.use(cors())

//Conexão com o Banco de Dados
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'escola'
})


// API para buscar todos os usuarios.
app.get('/usuariosss', (req, res) => {
    let sql = `select * from usuarios`
    conexao.query(sql, (erro, result) => {
        try{
            return res.json(result)
        }catch(error){
            console.log(error, erro)
        }
    })
})

// API para buscar todos os professores.
app.get('/professores', (req, res) => {
    let sql = `select * from usuarios where tipo = 'professor'`
    conexao.query(sql, (erro, result) => {
        try{
            return res.json(result)
        }catch(error){
            console.log(error, erro)
        }
    })
})

// API para buscar usuario por ID.
app.get('/usuarios/:id', (req, res) => {
    let id = req.params.id
    let sql = `select * from usuarios where id = ${id}`
    conexao.query(sql, (erro, result) => {
        try{
            return res.json(result)
        }catch(error){
            console.log(error)
        }
    })
})

// API para buscar usuario por nome.
app.get('/usuarios', (req, res) => {
    const nome = req.query.nome
    const sql = `SELECT * FROM usuarios WHERE nome = ?`
    
    conexao.query(sql, [nome], (erro, result) => {
        if (erro) {
            console.log(erro)
            return res.status(500).json({ erro: 'Erro ao buscar usuário por nome' })
        }
        return res.json(result)
    })
})

app.post('/cadastrarUsuario', (req, res) => {
    let novoUsuario = req.body
    let sql = `insert into usuarios(username, senha, nome, tipo, ativo) 
    values('${novoUsuario.username}', '${novoUsuario.senha}', '${novoUsuario.nome}', '${novoUsuario.tipo}', ${novoUsuario.ativo})`
    conexao.query(sql, (erro, result) => {
        try{
            return res.send('Usuario cadastrado com sucesso!')
        }catch(error){
            console.log(error)
        }
    })
})

app.listen(porta, () => {
    console.log(`O servidor está rodando na porta ${porta}`)
})