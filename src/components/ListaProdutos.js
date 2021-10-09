import React from 'react';
import ProdutoApi from '../api/ProdutoApi';

class ListaProdutos extends React.Component {
    state = {
        produtos: undefined
    }

    async componentDidMount() {
        let produtoApi = new ProdutoApi();

        // produtoApi.getAll().then(_produtos => {
        //     this.setState({ produtos: _produtos })
        // }).catch(err => console.log(err));

        try {
            let _produtos = await produtoApi.getAll();
            this.setState({ produtos: _produtos });
        } catch(err) {
            console.log(`Erro: ${err}`);
        }
    }

    render() {
        return (
                this.state.produtos !== undefined ?
                    this.state.produtos.map(p => { 
                        return <div key={p.codigo}>
                                    {p.codigo} - {p.nome}
                               </div>
                    }) : <h1>Não há qualquer produto</h1>
            )
    }
}

export default ListaProdutos;

