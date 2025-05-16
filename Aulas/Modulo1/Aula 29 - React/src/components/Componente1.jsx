import React from 'react';
import { useState, useEffect } from 'react';
const Componente1 = (props) => {
  return (
    <div>
        <h1>Lista de produtos cadastrados:</h1>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {props.produtos.map((produto) => (
            <div key={produto.id} style={{ border: '1px solid black', margin: '10px', padding: '10px', width: '250px', textAlign: 'center' }}>
                <h2>Nome: {produto.title}</h2>
                <img src={produto.image} alt={produto.title} style={{ maxWidth: '200px', maxHeight: '200px' }} />
                <h3>Descrição: {produto.description}</h3>
                <h3>Preço: R${produto.price}</h3>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Componente1;
