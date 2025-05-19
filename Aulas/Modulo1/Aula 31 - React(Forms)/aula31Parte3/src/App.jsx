import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BuscarCEP from './components/BuscarCEP'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BuscarCEP/>
    </>
  )
}

export default App
