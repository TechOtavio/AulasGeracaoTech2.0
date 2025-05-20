import React from 'react'

const Home = () => {
    const [imageUrl, setImageUrl] = React.useState('')
    function GerarImagem(){
        setImageUrl(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyopaDcSwgPdmxdZWPaDJ6xIpLybg3jR-XeA&s`);
    }
  return (
    <div className='m-3 text-center'>   
        <h1>Bem-vindo à página inicial!</h1>
        <button className='bg-primary rounded-3 border-0 p-2' onClick={GerarImagem}>Aperte</button><br />
        {imageUrl && <img className='m-5 rounded-5' src={imageUrl} alt="ImagemAleatoria"></img>}
    </div>
  )
}

export default Home