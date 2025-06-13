import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Perfil from '../pages/Perfil'
import Admin from '../pages/Admin'
import Aluno from '../pages/Aluno'
import Professor from '../pages/Professor'
import RotasProtegidas from './RotasProtegidas'

const AppRoutes = () => {
  return (
    <Routes>
      {/* Rotas públicas */}
      <Route path='/' element={<Home />} />
      <Route path='/perfil' element={<Perfil />} />

      {/* Rotas protegidas agrupadas em uma rota pai */}
      {/* <Route element={<RotasProtegidas />}>
        <Route path='/admin' element={<Admin />} />
        <Route path='/aluno' element={<Aluno />} />
        <Route path='/professor' element={<Professor />} />
      </Route> */}
      <Route path='/admin' element={
        <RotasProtegidas tipoPermitido="admin">
          <Admin />
        </RotasProtegidas>
      } />
      <Route path='/aluno' element={
        <RotasProtegidas tipoPermitido="aluno">
          <Aluno />
        </RotasProtegidas>
      } />
      <Route path='/professor' element={
        <RotasProtegidas tipoPermitido="professor">
          <Professor />
        </RotasProtegidas>
      } />
    </Routes>
  )
}

export default AppRoutes
