import ProdutoDetalhe from "./ProdutoDetalhe";
import ProdutoListar from "./ProdutoListar";
import ProdutoContext from "../../contexts/ProdutoContext";
import { useState } from "react";


function ProdutoCadastro() {

    const setProduto = (produto) => {
        setProdutoSelecionado({...produtoSelecionado, "produto": produto})
    }

    const valorProdutoSelecionado = {
        "produto": undefined,
        "setProduto": setProduto
    }

    const [produtoSelecionado, setProdutoSelecionado] = useState(valorProdutoSelecionado);

    return (
        <>  
            <ProdutoContext.Provider value={produtoSelecionado}>
                <ProdutoListar/>
                <ProdutoDetalhe/>
            </ProdutoContext.Provider>
        </>
    )
}

export default ProdutoCadastro;