import { useEffect, useState } from "react";

function ListaProdutosFuncao() {
    const [produtos, setProdutos] = useState(undefined);

    useEffect(() => {

    });

    return (
        this.state.produtos !== undefined ?
            this.state.produtos.map(p => { 
                return <div key={p.codigo}>
                            {p.codigo} - {p.nome}
                       </div>
            }) : <h1>Não há qualquer produto</h1>
    )
}
