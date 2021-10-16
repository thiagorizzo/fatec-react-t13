import React from "react";

function ProdutoDetalhe({ produto }) {

    return (
        <>
            { produto ?
                <div className="card">
                    {produto.urlImagem ?
                        <img className="card-img-top" style={{ height: 200, width: 200 }} src={produto.urlImagem} alt={produto.nome} />
                        : <span></span>
                    }
                    <div className="card-body">
                        <h5 className="card-title">{produto.nome}</h5>
                        <p className="card-text">{produto.preco}</p>
                    </div>
                </div>
                : <div></div>
            }
        </>
    );
}

export default ProdutoDetalhe;