import React from 'react';

class ExemploState extends React.Component {

    state = {
        nome: "thiago",
        codigo: 1
    }
    
    clicou = () => {
        //this.state.nome = "nome modificado";
        this.setState({ nome: "nome modificado" });
    }

    render() {
        return <>
                <input type="text" value={this.state.nome}/>
                <button onClick={this.clicou}>Modificar nome</button>
               </>
    }
}

export default ExemploState;