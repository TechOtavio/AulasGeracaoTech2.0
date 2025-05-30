import React, { useContext, useState } from 'react'
import UserContext from '../contexts/UserContext'

const Perfil = () => {
    let [user, setUser] = useContext(UserContext)
  return (
    <div>Perfil</div>
  )
}

export default Perfil