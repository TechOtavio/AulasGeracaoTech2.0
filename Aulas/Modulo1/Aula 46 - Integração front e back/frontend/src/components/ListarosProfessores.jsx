import React, { useEffect, useState } from 'react'

const ListarosProfessores = () => {
    let [usuarios, setUsuarios] = useState([])
    useEffect(() => {
        const buscarUsuario = async () => {
      try{
        const resposta = await fetch('http://localhost:3000/professores')
        const dados = await resposta.json()
        setUsuarios(dados)
      }catch(erro){
        console.log(erro)
      }
    }
    buscarUsuario()
    }, [])
    console.log(usuarios)
  return (
    <div>
      <h1>Lista de Professores</h1>
      <ul>
        {usuarios.map((usuario) => (
          <li>{usuario} </li>
        ))}K
      </ul>
    </div>
  )
}

export default ListarosProfessores