import './App.css'
import Componente1 from './components/Componente1'

function App() {

  return (
    <>
      {/* CSS Global: editando o index.css*/}
      <h1>Titulo 1</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus excepturi facilis debitis nam ipsum ipsa numquam aliquid ducimus! Culpa ducimus quia dicta reprehenderit odio similique sint eius dolorum ut nesciunt.</p>
      <p className='paraDois'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum facilis earum quod harum molestiae laudantium. Reiciendis tenetur at sequi explicabo, vero facere impedit voluptatum dicta repellendus, fuga ullam illum maxime.</p>
      {/* CSS de  componente */}
      <Componente1 />
    </>
  )
}

export default App
