import express from 'express'
import mysql from 'mysql2'

const App = express()
const Porta = 3000
App.use(express.json());

//Conexão MYSQL
const conexão = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database: 'escola'
})

//Rota com banco de dados

conexão.connect((erro) =>{
    if(erro){
        console.log(`Erro ao conectar no banco ${erro}`)
    }else{
        console.log('Banco conectado com sucesso!')
    }
})

App.get('/usuariosEscola', (req, res) => {
    let sql = 'select * from usuarios'
    conexão.query(sql, (erro, result) => {
        if(erro){
            console.log(`Erro: ${erro}`)
            return res.send(erro)
        }else{
            console.log(result)
            return res.send(result)
        }
    })
})

App.get('/Turmas', (req, res) => {
    let sql = 'select * from turmas'
    conexão.query(sql, (erro, result) => {
        if(erro){
            console.log(`Erro: ${erro}`)
            return res.send(erro)
        }else{
            console.log(result)
            return res.send(result)
        }
    })
})

//rotas comuns

const usuarios = [
    {id: '1', nome:'otavio', ativo: true},
    {id: '2', nome:'diosio', ativo: false},
    {id: '3', nome:'gabriel', ativo: true},
]

App.get('/', (req, res)=>{
    res.send('Olá mundo!')
})

App.get('/usuarios',(req, res)=>{
    res.json(usuarios)
})

App.get('/usuarios/:id', (req, res) => {
    let id = req.params.id
    for(let usuario of usuarios){
        if(usuario.id == id){
            return res.json(usuario)
        }
    }
    return res.send('Usuário não encontrado!')
})

App.post('/cadastrar', (req, res) => {
    let novoUsuario = req.body
    console.log(novoUsuario)
    usuarios.push(novoUsuario)
    res.send('Usuários cadastrado com sucesso!')
})

App.put('/atualizar/:id', (req, res) =>{
    let id = req.params.id
    let atualizacao = req.body
    for(let usuario of usuarios){
        if(usuario.id == id){
            usuario.nome = atualizacao.nome
            return res.json(usuarios)
        }
    }
    return res.send("Erro!")
})

App.delete('/deletarUsuario/:id', (req, res) => {
    let id = req.params.id
    for(let i = 0; i < usuarios.length; i++){
        if(usuarios[i].id == id){
            usuarios.splice(i, 1)
            return res.json(usuarios)
        }
    }
    res.send('Coloque um id válido!')
})

App.listen(Porta, ()=>{
    console.log(`Servidor rodando na porta ${Porta}`)
})