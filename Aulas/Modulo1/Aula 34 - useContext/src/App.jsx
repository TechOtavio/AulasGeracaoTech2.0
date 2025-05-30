import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { UserProvider } from './contexts/UserContext'

function App() {

  return (
    <>
    <UserProvider>
      <BrowserRouter>
        <NavBar />
        <h1>UseContext</h1> 
        <AppRoutes />  
      </BrowserRouter>
    </UserProvider>
    </>
  )
}

export default App
