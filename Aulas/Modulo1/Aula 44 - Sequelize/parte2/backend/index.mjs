import express from 'express'
import cors from 'cors'

const app = express()
const porta = 3000

// MiddleWare
app.use(express.json())
app.use(cors())


let users =[{id:1, nome:'otavio', email: 'otavio@gmail.com'}, {id:2, nome:'gabriel', email: 'gabriel@gmail.com'}, {id:3, nome:'gaby', email: 'gaby@gmail.com'}]

app.get('/usuarios', (req, res) => {
    return res.json(users)
})

app.listen(porta, () => {
    console.log(`O servidor está rodando na porta ${porta}`)
})