import React from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Contato from '../pages/Contato'
import Login from '../pages/Login'

const AppRoutes = () => {
  let logado = false
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Sobre' element={<Sobre/>} />
        <Route path='/Contato' element={<Contato/>} />
    </Routes>
  )
}

export default AppRoutes