const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Middleware para interpretar o corpo das requisições POST
app.use(express.urlencoded({
    extended: false
}));

// Usuários simples para validação.
const usuarios = [
    {
        email: 'otaviolevi@petshop.com',    
        senha: '123456'
    },
    {
        email: 'gabrielalex@petshop.com',
        senha: '123456'
    }
]

// Direcionando para o arquivo principal Login.html
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'Login.html'));
})

// Confereindo as informações de login
app.post('/login', (req,res) => {
    const { email, senha } = req.body;
    const procurandoUsuario = usuarios.find(u => u.email === email && u.senha === senha);
    if(procurandoUsuario){
        res.send(`
            <h2>✅ Login bem-sucedido! Bem-vindo, ${email}.</h2>
            <p>Você será redirecionado para a página principal em 3 segundos...</p>
            <script>
              setTimeout(() => {
                window.location.href = '/teste'; // Redireciona para a página Teste.html
              }, 3000);
            </script>
          `);
        
    }
    else{
        res.send('<h2>❌ Login inválido! Tente novamente.</h2> <p>Você será redirecionado para a página de login em 3 segundos...</p>           <script> setTimeout(() => { window.location.href = "/"; }, 3000); </script>');
    }
})  

app.get('/teste', (req, res) => {
    res.sendFile(path.join(__dirname, 'Teste.html'));
})

app.listen(port, () => {    
    console.log(`Servidor rodando em http://localhost:${port}`);
})