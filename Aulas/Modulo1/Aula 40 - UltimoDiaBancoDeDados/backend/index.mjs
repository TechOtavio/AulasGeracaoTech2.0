import express from "express";

const app = express();
const porta = 3000;
app.use(express.json());

const usuarios = [
    {id: '1', nome: 'otavio', ativo: true},
    {id: '2', nome: 'diosio', ativo: true},
    {id: '3', nome: 'gabriely', ativo: false}
]

app.get('/', (req, resp) =>{
    resp.send('olá mundo!')
})

app.get('/usuarios', (req, resp) =>{
    resp.json(usuarios)
})

app.get('/usuarios/:id', (req, res) => {
    let id = req.params.id
    for(let i = 0; i < usuarios.length; i++){
        if(id == usuarios[i].id){
            res.json(usuarios[i])
        }
    }
    res.send('Usuário não encontrado!')
})

app.post('/usuarios', (req, res) =>{
    let novoUsuario = req.body
    console.log(novoUsuario)
    res.send("Usuario encotrado!")
})

app.listen(porta, () =>{
    console.log(`Servidor rodando na porta ${porta}`)
})