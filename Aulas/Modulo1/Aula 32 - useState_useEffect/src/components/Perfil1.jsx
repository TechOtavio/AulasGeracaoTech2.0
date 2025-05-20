import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from './Forms.module.css'

const Perfil1 = () => {
    let [dados, setDados] = useState(null)
    let [carregando, setCarregando] = useState(true)
    useEffect(()=>{
        setCarregando(true)
        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(dado => {
            setDados(dado)
            console.log(dado)
            setCarregando(false)
        })
        
    },[])
  return (
    <div style={{width: '200px', margin: '20px auto', backgroundColor: 'lightblue', textAlign: 'center', borderRadius: '10px', padding: '20px', boxShadow: '0 0 10px rgba(0,0,0,0.5)'}}>
        {carregando && <h1 className={styles.carregando}>Carregando...</h1>}
        {dados && (
            <img  src={dados.results[0].picture.thumbnail} alt=''></img>
        )}
    </div>
  )
}

export default Perfil1