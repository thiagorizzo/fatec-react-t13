import { createContext } from "react";

const valorInicial = {
    produto: undefined,
    setProduto: () => {}
}

const ProdutoContext = createContext(valorInicial)

export default ProdutoContext;
