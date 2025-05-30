import { createContext, useState } from 'react'

export const UserContext = createContext(null)
export const UserProvider = ({ children })=>{
    let [usuario, setUsuario] = useState('' )
    let user = {
        nome:'joao',
        email:'joao@gmail.com',
        age:28
    }
    setUsuario(user)
    return (
    <UserContext.Provider value={{usuario, setUsuario}}>
        {children}
    </UserContext.Provider>
)
}




export default UserContext