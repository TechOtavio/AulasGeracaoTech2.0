import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const BuscarCEP = () => {
    let [cep, setCep] = useState('')
    let [clicou, setClicou] = useState(0)
    let [endereco, setEndereco] = useState()

    useEffect(()=>{
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            
        }).catch((error) => {
            console.error('Error:', error);
        });
    },[clicou])
  return (
    <div>
        <label htmlFor="cep">Digite seu CEP: </label>

        <input onChange={(e)=>setCep(e.target.value)}
        type="text" name='cep' id='cep' maxLength={8}/><br/>

        <h1>CEP digitados: {cep}</h1>
        <button onClick={(e)=>{
            setClicou(clicou + 1)
        }}>Enviar</button>
    </div>
  )
}

export default BuscarCEP