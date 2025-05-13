const Saudacao = (props) => {
  return (
    <div>
        {props.pessoas.map((pessoa, index) => (
        <p key={index}> Olá {pessoa.nome}! Sua idade é {pessoa.idade}</p>       
        ))
    }
    </div>
  )
}

export default Saudacao