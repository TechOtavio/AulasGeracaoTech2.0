import styles from './Componente1.module.css'

const Componente1 = () => {
    let estilo1 = {
    backgroundColor: 'green',
    color: 'white',
    padding: '15px'
  }
  return (
    <div>
        <h1 className={styles.paragrafo}>Esse é o titulo 2</h1>

        <p style={{backgroundColor:'orange'}}>Esse é o CSS de componente</p>

        <h2 style={estilo1}>CSS apenas desse componente</h2>
    </div>
  )
}

export default Componente1