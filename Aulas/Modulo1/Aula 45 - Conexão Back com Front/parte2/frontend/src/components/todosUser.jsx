import React from 'react'
import { useState, useEffect } from 'react'

function todosUser() {
  let [usuarios, setUsuarios] = useState([])
  useEffect(() => {
    const buscarUsuario = async () => {
      try{
        const resposta = await fetch('http://localhost:3000/usuarios')
        const dados = await resposta.json()
        setUsuarios(dados)
      }catch(erro){
        console.log(erro)
      }
    }
    buscarUsuario()
  }, [])
  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>{usuario.nome}</li>
        ))}
      </ul>
    </div>
  )
}

export default todosUser