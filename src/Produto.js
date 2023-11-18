import React from 'react';

function Produto({dados}) {

  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>{dados.descricao}</p>
      <p>{dados.preco}</p>
      <img src={dados.fotos[0].src}></img>
    </div>
  )
}

export default Produto;
