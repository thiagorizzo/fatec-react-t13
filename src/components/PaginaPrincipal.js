import React from 'react';
import ProdutoCadastro from './Produto/ProdutoCadastro';

class PaginaPrincipal extends React.Component {

    state = {
        produtoSelecionado: undefined
    }

    cor = "blue";

    constructor(props) {
        super(props);

        this.cor = props.cor;
    }

    onProdutoSelecionado = (produto) => {
        this.setState({ produtoSelecionado: produto})
    }

    render() {
        return (
               <>
                    <h1 style={{ backgroundColor: this.cor }}>Bem vindo</h1>
                    <hr/>
                    <ProdutoCadastro/>
               </>
        );
    }
}

export default PaginaPrincipal;