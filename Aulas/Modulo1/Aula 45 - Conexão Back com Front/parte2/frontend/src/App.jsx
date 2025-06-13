import { useEffect, useState } from 'react'
import './App.css'
import TodosUser from './components/todosUser'

function App() {
  let [mostrar, setMostrar] = useState(false)
  function mostrarUsuario(){
    if(mostrar){
      setMostrar(false)
    }else{
      setMostrar(true)
    }
  }
  return (
    <div>
      <h1>Selecione uma opção</h1>
      <button onClick={mostrarUsuario}>Todos os Usuarios</button>
      {mostrar? <TodosUser />: ''}
    </div>
  )
}

export default App
