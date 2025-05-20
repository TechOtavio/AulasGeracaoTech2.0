import './App.css'
import Perfil1 from './components/Perfil1'
import { useState, useEffect } from 'react'
import styles from './components/Forms.module.css'

function App() {
  const usuarios = [{user:'otavio', senha:'12345'}, {user:'andre', senha:'12345'}]
  let [logado, setLogado] = useState(false)
  let [user, setUser] = useState('')
  let [senha,setSenha] = useState('')
  function logar(){
    usuarios.forEach((usuario)=>{
      if(usuario.user === user){
        if(usuario.senha === senha){
          setLogado(true)
          setUser('')
          setSenha('')
        } 
      }
    })
  }  

  return (
    <div>
      <div style={{width: '200px', margin: '20px auto', backgroundColor: 'lightblue', textAlign: 'center', borderRadius: '10px', padding: '20px', boxShadow: '0 0 10px rgba(0,0,0,0.5)'}}>
        <img className={styles.imagem} src="https://blog.even3.com.br/wp-content/uploads/2022/11/81-imagens-de-destaque_formulario-de-inscricao.png" alt="Mundo" /><br />
        <label htmlFor="usuario">Usuário:</label><br />
        <input value={user} onChange={(e)=>{setUser(e.target.value)}} type="text" name="usuario" id="usuario"/><br />
        <label htmlFor="senha">Senha:</label><br />
        <input value={senha} onChange={(e)=>{setSenha(e.target.value)}} type="password" name="senha" id="senha"/><br /><br />
        <button type='submit' onClick={logar}>Logar</button>
      </div>
      {logado && <Perfil1 />}
    </div>
  )
}
export default App
