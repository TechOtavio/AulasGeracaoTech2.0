import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Perfil from '../pages/Perfil'

const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Perfil" element={<Perfil />} />
        </Routes>
    </div>
  )
}

export default AppRoutes