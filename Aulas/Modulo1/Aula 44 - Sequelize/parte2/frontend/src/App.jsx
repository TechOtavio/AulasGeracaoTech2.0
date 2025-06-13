import { useEffect, useState } from 'react'
import './App.css'

function App() {
  let [usuarios, setUsuarios] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/usuarios')
    .then((res) => {res.json()})
    .then((dado) => {
      setUsuarios(dado)
      console.log(usuarios)
    })
  }, [])
  return (
    <>
    </>
  )
}

export default App
