import express from "express"
import dotenv from 'dotenv'
import { DataTypes, Sequelize } from 'sequelize'

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

// Definição dos módulos:

// Tabela Usuarios
const Usuarios = sequelize.define('Usuarios',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    username:{type: DataTypes.STRING, unique: true, allowNull: false},
    senha:{type: DataTypes.STRING, allowNull: false},
    nome:{type: DataTypes.STRING, allowNull: false},
    ativo:{type: DataTypes.BOOLEAN,  defaultValue: true},
    tipo:{type: DataTypes.ENUM('admin', 'aluno', 'professores')}
}, {timestamps: false})

// Tabelas Turmas
const Turmas = sequelize.define('Turmas', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nome:{type: DataTypes.STRING},
    ano:{type: DataTypes.INTEGER}
}, {timestamps: false})

// Tabelas de alunos
const Alunos = sequelize.define('Aluno', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    usuario_id:{type: DataTypes.INTEGER, unique: true, references: {model: 'Usuarios', key:'id'}},
    matricula:{type: DataTypes.STRING, allowNull: false, unique: true},
    data_nascimento:{type: DataTypes.DATEONLY},
    turma_id:{type: DataTypes.INTEGER, references: {model: 'Turmas', key:'id'}, onDelete: 'CASCADE'}
}, {timestamps: false})

app.get('/teste', async (req, res) => {
    let alunos = await Alunos.findAll()
    console.log(alunos)
    return res.send(alunos)
})

app.get('/turmas', async (req, res) => {
    let turmas = await Turmas.findAll()
    console.log(turmas)
    return res.send(turmas)
})

app.get('/usuarios', async (req, res) => {
    let usuarios = await Usuarios.findAll()
    console.log(usuarios)
    return res.send(usuarios)
})


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