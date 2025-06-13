import express from 'express'
import mysql from 'mysql2'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import {Sequelize, DataTypes} from 'sequelize'

// Configurando para a utilização do Dotenv
dotenv.config()

const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD,{
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    }
)

try{
    await sequelize.authenticate()
    console.log("Banco conectado com sucesso!")
}catch(e){
    console.log(e)
}


// Instanciando o express e criando a porta
const app = express()
const porta = process.env.NODE_PORTA

// Trabalhar com os dados em json
app.use(express.json())

// Função para conexão com o BD
function conectarBanco(){
    const conexão = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    })
    console.log('Banco conectado com sucesso!')
    return conexão
}
conectarBanco()

// Rotas
app.get('/', (req, res) => {
    return res.send('API inicial')
})

app.get('/todosUsuarios', (req, res) => {
    const conexão = conectarBanco()
    let sql = `select nome, tipo from usuarios`
    conexão.query(sql, (erro, result) => {
        if(erro){
            console.log(`Deu erro: ${erro}`)
        }else{
            conexão.end()
            return res.json(result)
        }
        conexão.end()
    })
})

app.get('/todosAlunos/:id', (req, res) => {
    const conexão = conectarBanco()
    let id = req.params.id
    let sql = `select * from usuarios where tipo = 'aluno' and id = ${id}`
    conexão.query(sql, (erro, result) => {
        if(erro){
            console.log(`Deu erro: ${erro}`)
        }else{
            conexão.end()
            return res.json(result)
        }
        conexão.end()
    })
})

app.post('/cadastrar', async (req, res) => {
    const conexao = conectarBanco()
    let novoUsuario = req.body
    novoUsuario.senha = await bcrypt.hash(novoUsuario.senha, 10)
    let sql = `insert into usuarios(username, senha, nome, ativo, tipo) 
               values ('${novoUsuario.username}', '${novoUsuario.senha}', '${novoUsuario.nome}', ${novoUsuario.ativo}, '${novoUsuario.tipo}')`
    conexao.query(sql, (erro, result) => {
        if(erro){
            console.log(`Erro: ${erro}`)
        }else{
            return res.status(205).console.log('Usuário cadastrado!')
        }
    })
})

app.listen(porta, () => {
    console.log(`Servidor rodando na porta: ${porta}`);
    
})