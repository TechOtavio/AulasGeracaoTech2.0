import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
      <h1>HELLO WORLD </h1>
    </>
  )
}

export default App
