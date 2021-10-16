import React from 'react';

function Avaliacao({ valor }) {

    const estrela = `${process.env.PUBLIC_URL}\\estrela.png`;
    const estrelaApagada = `${process.env.PUBLIC_URL}\\estrela-apagada.png`;

    return (
        <>
            {
                Array(valor).fill(1).map((el, i) =>
                    <img style={{ height: 40, width:40 }} src={estrela} alt=""/>
                )
            }

            {
                Array(5 - valor).fill(1).map((el, i) =>
                    <img style={{ height: 40, width:40 }} src={estrelaApagada} alt=""/>
                )
            }
        </>
    )
}

export default Avaliacao;