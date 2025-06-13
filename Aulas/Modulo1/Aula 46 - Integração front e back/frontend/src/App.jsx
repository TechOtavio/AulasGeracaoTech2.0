import { useEffect, useState } from 'react'
import './App.css'
import TodosUser from './components/TodosUser'
import UsuarioEspecifico from './components/UsuarioEspecifico'
import Cadastro from './components/Cadastro'
import ListarosProfessores from './components/ListarosProfessores'


function App() {
  let [mostrar, setMostrar] = useState(false)
  let [id, setId] = useState('')
  let [dadosUser, setDadosUser] = useState({nome:""})

  let [componente, setComponente] = useState()


  return (
    <div>
      <h1>Selecione uma opção</h1>
      <button onClick={()=>{setComponente('todos')}}>Todos os Usuarios</button> 
      <button onClick={()=>{setComponente('um')}}>Exibir Usuario</button>
      <button onClick={()=>{setComponente('cadastrar')}}>Cadastrar Usuario</button>
      <button onClick={()=>{setComponente('atualizar')}}>Atualizar Dados</button>
      <button onClick={()=>{setComponente('deletar')}}>Deletar</button>
      <button onClick={()=>{setComponente('')}}>Limpar a Tela</button>
      <button onClick={()=>{setComponente('professores')}}>Listar Professorers</button>

      <div>
        {componente == 'todos' && <TodosUser />}
        {componente == 'um' && <UsuarioEspecifico />}
        {componente == 'cadastrar' && <Cadastro />}
        {componente == 'professores' && <ListarosProfessores />}
      </div>
    </div>
  )
}

export default App
