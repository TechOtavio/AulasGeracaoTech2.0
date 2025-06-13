import React, { useState } from 'react'

const UsuarioEspecifico = () => {
    let [id, setId] = useState()
    let [nome, setNome] = useState()
    let [usuario, setUsuario] = useState()
    let [mostrarUsuario, setMostrarUsuario] = useState(false)
    let [mostrarPeloNome, setMostrarPeloNome] = useState(false)

    async function buscarID(){
        try{
            const resposta = await fetch(`http://localhost:3000/usuarios/${id}`)
            const dados = await resposta.json()
            await setUsuario(dados)
            setMostrarUsuario(true)
        }catch(error){
            console.log(error)
            setUsuario(null)
        }
    }

    async function buscarNome() {
        try{
            const resposta = await fetch(`http://localhost:3000/usuarios?nome=${nome}`)
            const dados = await resposta.json()
            await setUsuario(dados)
            setMostrarPeloNome(true)
        }catch(error){
            console.log(error)
            setUsuario(null)
        }
    }

    console.log(usuario)

    return (
        <div>
            <h2>Digite o ID:</h2>
            <input onChange={(e)=>{setId(e.target.value)}} type="text" placeholder='ID...'/>
            <button onClick={buscarID}>Buscar</button>
            {mostrarUsuario && 
            <div>
                Nome: {usuario[0].nome} <br />
                Tipo: {usuario[0].tipo} <br />
                Ativo: {usuario[0].ativo ? 'ativo' : 'Inativo'}
            </div>
            }

            <h2>Digite o Nome:</h2>
            <input onChange={(e)=>{setNome(e.target.value)}} type="text" placeholder='Nome...'/>
            <button onClick={buscarNome}>Buscar</button>
            {mostrarPeloNome && 
            <div>
                Nome: {usuario[0].nome} <br />
                Tipo: {usuario[0].tipo} <br />
                Ativo: {usuario[0].ativo ? 'ativo' : 'Inativo'}
            </div>
            }
        </div>
    )
}

export default UsuarioEspecifico