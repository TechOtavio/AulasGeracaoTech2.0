import express from "express"
import dotenv from 'dotenv'
import { Sequelize } from 'sequelize'

// Configurando o dotenv
dotenv.config()

// Configurando express
const app = express()
const porta = process.env.NODE_PORTA
app.use(express.json())

// Utilizando o sequelize para conexão do banco de dados
const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD,{
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    }
)

// Metodo GET para buscar todos os usuarios no Banco de Dados
app.get('/', async (req, res) => {
    try{
        const resultado = await sequelize.query(`select * from usuarios`)
        return res.json(resultado)
    }catch(e){
        console.log(`Erro ao buscar usuario: ${e}`)
        return res.send('Erro!')
    }
})


app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
}) 