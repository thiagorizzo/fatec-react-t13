import React from "react";
import ProdutoContext from "../../contexts/ProdutoContext";

function ProdutoDetalhe() {

    return (
        <ProdutoContext.Consumer>
            { ({produto}) => 
                produto &&
                <div className="card">
                    {produto.urlImagem &&
                        <img className="card-img-top" style={{ height: 200, width: 200 }} src={produto.urlImagem} alt={produto.nome} />
                    }
                    <div className="card-body">
                        <h5 className="card-title">{produto.nome}</h5>
                        <p className="card-text">{produto.preco}</p>
                    </div>
                </div>
            }
        </ProdutoContext.Consumer>
    );
}

export default ProdutoDetalhe;