import style from './Card.module.css'

const Card = () => {
  return (
    <div>
        <div className={style.all}>
            <img className={style.img} src="https://cdn.alboompro.com/5fb3e0f69111f40001922f2f_641c6864a52ac00001115b6a/large/melhor-foto-corporativa-para-linkedin.jpg?v=1" alt="Foto Profissional" />
            <h2>Gabriely Laurentino</h2>
            <p style={{opacity: '0.8'}}>Desenvolvedora FullStack</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis aliquid eius totam. Laboriosam dolor hic magni, saepe veniam molestiae non optio sunt sapiente error? Nostrum, numquam ea! Dolorum, corporis non. </p>
        </div>
        <div>
            <div className={style.divTitulo}>
                <h2>Projetos Recentes: </h2>
            </div>
            <div className={style.divPortifolio}>
                <h3>Projeto 01:</h3>
                <p>Descrição: Esse projeto tararararrararararraararr...</p>
            </div>
            <div className={style.divPortifolio}>
                <h3>Projeto 02:</h3>
                <p>Descrição: Esse projeto tararararrararararraararr...</p>
            </div>
        </div>
    </div>
  )
}

export default Card