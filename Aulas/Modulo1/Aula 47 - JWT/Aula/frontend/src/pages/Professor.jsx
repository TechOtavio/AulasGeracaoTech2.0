import React from 'react'

const Professor = () => {
    const professor = JSON.parse(localStorage.getItem('professor'))
  return (
    <div>
        Essa é a página do Professor
    </div>
  )
}

export default Professor