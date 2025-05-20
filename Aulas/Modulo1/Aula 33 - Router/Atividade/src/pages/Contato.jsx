import React from 'react'

const Contato = () => {
  return (
    <div>
        <h1 className='m-3 text-center'>Entre em contato conosco!</h1>
        <p className='m-3 text-center'>Se você tiver alguma dúvida ou sugestão, não hesite em nos contatar.</p>
        <p className='m-3 text-center'>Estamos aqui para ajudar!</p>
        <form className='m-3 text-center'>
            <input type="text" placeholder="Seu nome" className="form-control mb-2" />
            <input type="email" placeholder="Seu email" className="form-control mb-2" />
            <textarea placeholder="Sua mensagem" className="form-control mb-2"></textarea>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    </div>
  )
}

export default Contato