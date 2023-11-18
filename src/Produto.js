import React from 'react';

const Produto = ({dados}) => {
    return(
        <div>
        <h1>{dados.nome}</h1>
        <p>{dados.descricao}</p>
        <p>R$ {dados.preco}</p>
        <img src={dados.fotos[0].src}></img>
        </div>
    );
}

export default Produto;
