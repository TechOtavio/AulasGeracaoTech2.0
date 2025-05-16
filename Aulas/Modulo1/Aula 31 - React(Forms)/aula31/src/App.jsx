import { useState } from 'react'
import './App.css'

function App() {
  let[user, setUser] = useState('')
  let[senha, setSenha] = useState('')
  let usuarios = [
    {user: 'otavio', senha: '123'},
    {user: 'andre', senha: '456'},
    {user: 'maria', senha: '789'},
    {user: 'pedro', senha: '123'},
  ]

  function click(e){
    e.preventDefault()
    let usuario = usuarios.find((usuario) => usuario.user === user && usuario.senha === senha)
    if(usuario){
      alert('Logado com sucesso!')
    }   
  }
  function renderizarPerfil(){

  }
  return (
    <>
      <h1>Tela de Login</h1>
      <form>
        <div>
          <label htmlFor="user">Usuário:</label><br />
          <input onChange={(e) => setUser(e.target.value)} type='text' id='user' name='user'/><br />
        </div>
        <div>
          <label htmlFor="senha">Senha:</label><br />
          <input onChange={(e) => setSenha(e.target.value)} type='password' id='senha' name='senha'/><br />
        </div>
        <button onClick={(e) => click(e)} type='submit'>Logar</button>
      </form>
    </>
  )
}

export default App
