import React, { useEffect } from 'react'

const Atualizatitulo = () => {
    let [cont, setCont] = React.useState(0)
    useEffect(()=>{
        document.title = `Você clicou ${cont} vezes`
    }, [])

  return (
    <div>
        <p>Contador: {cont}</p>
        <button onClick={()=> setCont(cont + 1)}>Aumentar</button>
    </div>
  )
}

export default Atualizatitulo