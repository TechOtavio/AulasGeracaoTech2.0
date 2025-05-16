import React from 'react'

const Formulario = () => {
    let [nome, setNome] = React.useState("")
    let [email, setEmail] = React.useState("")
  return (
    <div>
        <h1>Formulário Atividade</h1>
        <form>
            <label htmlFor="nome">Nome: </label><br />
            <input onChange={(evento) => setNome(evento.target.value)} type="text" name="nome" id="nome"/><br />
            <br />              
            <label htmlFor="email">Email: </label><br />
            <input onChange={(evento) => setEmail(evento.target.value)} type="text" name="email" id="email" /><br />
            <h2>Nome digitado: {nome}</h2>
            <h2>E-mail digitado: {email}</h2>
        </form>
    </div>
  )
}

export default Formulario