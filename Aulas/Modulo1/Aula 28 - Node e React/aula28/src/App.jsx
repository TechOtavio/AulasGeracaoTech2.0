import { useState } from 'react'
import './App.css'
import 'bootstrap'
import Rodape from './components/Rodape'
import Cabecalho from './components/Cabecalho'
import Saudacao from './components/Saudacao'

function App() {
  let pessoas = [
    {nome: 'Lucas', idade: 20},
    {nome: 'Ana', idade: 25},
    {nome: 'João', idade: 30}
  ]

  return (
    <>
      <Cabecalho/>
      <h1>Hello Vite + React!</h1>
      <Saudacao pessoas = {pessoas}/>
      <Rodape/>
    </>
  )
}

export default App
