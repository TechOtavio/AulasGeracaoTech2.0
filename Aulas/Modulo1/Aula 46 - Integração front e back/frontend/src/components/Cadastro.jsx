import React, { useState } from 'react'

const Cadastro = () => {
    let [username, setUserName] = useState()
    let [nome, setNome] = useState()
    let [senha, setSenha] = useState()
    let [ativo, setAtivo] = useState()
    let [tipo, setTipo] = useState()

    async function enviarDados(){
        try{
            const resposta = await fetch('http://localhost:3000/cadastrarUsuario', {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(
                    {username: username, nome: nome, senha:senha, ativo:ativo, tipo:tipo}
                )})
                console.log(resposta)
                setUserName('')
                setNome('')
                setSenha('')
                setAtivo('')
                setTipo('')
            }catch(error){
                console.log(error)
        }
    }

  return (
    <div>
        <h2>Cadastrar usuario</h2>
        <div>
            <div>
                <label htmlFor="">Nome de Usuário: </label>
                <input value={username} onChange={(e) => setUserName(e.target.value)} type="text" />
            </div>
            <div>
                <label htmlFor="">Nome: </label>
                <input value={nome} onChange={(e) => setNome(e.target.value)} type="text" />
            </div>
            <div>
                <label htmlFor="">Senha: </label>
                <input value={senha} onChange={(e) => setSenha(e.target.value)} type="text" />
            </div>
            <div>
                <label htmlFor="">Ativo: </label>

                <input onChange={(e) => setAtivo(e.target.value)} name='ativo' id='sim' value={ativo} type="radio" />
                <label htmlFor="sim">Sim</label>

                <input onChange={(e) => setAtivo(e.target.value)} name='ativo' id='nao' value={ativo} type="radio" />
                <label htmlFor="nao">Não</label>
            </div>
            <div>
                <label htmlFor="tipo">Tipo de usuario:</label><br />
                <select onChange={(e) => setTipo(e.target.value)} name="tipo" id="tipo">
                    <option value="">--Selecione--</option>
                    <option value="aluno">Aluno</option>
                    <option value="professor">Professor</option>
                </select>
            </div>
            <button onClick={enviarDados}>Enviar</button>
        </div>
    </div>
  )
}

export default Cadastro