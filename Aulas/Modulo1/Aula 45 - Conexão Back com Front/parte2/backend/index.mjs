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


app.get('/usuarios', (req, res) => {
    let sql = `select * from usuarios`
    conexao.query(sql, (erro, result) => {
        try{
            return res.json(result)
        }catch(error){
            console.log(error, erro)
        }
    })
})

app.listen(porta, () => {
    console.log(`O servidor está rodando na porta ${porta}`)
})