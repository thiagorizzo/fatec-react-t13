import React from 'react';
import ListaProdutos from './ListaProdutos';

class PaginaPrincipal extends React.Component {

    cor = "blue";

    constructor(props) {
        super(props);

        this.cor = props.cor;
    }

    render() {
        return (
               <>
                    <h1 style={{ backgroundColor: this.cor }}>Bem vindo</h1>
                    <hr/>
                    <ListaProdutos/>
               </>
        );
    }
}

export default PaginaPrincipal;