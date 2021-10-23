import { useContext, useEffect, useState } from "react";
import ProdutoApi from '../../api/ProdutoApi';
import ProdutoContext from "../../contexts/ProdutoContext";
import TemaContext from "../../contexts/TemaContext";
import Avaliacao from "../Avaliacao";

function ProdutoListar() {
    const [produtos, setProdutos] = useState(undefined);

    const valorProdutoContext = useContext(ProdutoContext); /* Pega valor no contexto */

    // executa na mudança do state produtos
    useEffect(() => {
        console.log("Mudou state produtos");
    }, [produtos]);

    // executa apenas 1 vez no início ()
    useEffect(() => {
        console.log("use effect []");

        async function fetchData() {
            let produtoApi = new ProdutoApi();

            try {
                let _produtos = await produtoApi.getAll();
                setProdutos(_produtos);
            } catch(err) {
                console.log(`Erro: ${err}`);
            }
        }

        fetchData();        
    }, []);    

    // executado em qualquer mudança de state/prop
    useEffect(() => {

    });    

    function selecionarProduto(produto) {
        valorProdutoContext.setProduto(produto);
    }

    function getStyleProduto(produto) {
        if (produto === valorProdutoContext.produto) { 
            return { backgroundColor: "red", color: "white" };
        }
    }

    return (
            <TemaContext.Consumer>
                { (valorTemaContext) => 
                    produtos &&
                        <table className={valorTemaContext === "dark" ? "table table-dark" : "table"}>
                            <thead>
                                <tr>
                                    <th>Codigo</th>
                                    <th>Nome</th>
                                    <th>Preco</th>
                                    <th>Imagem</th>
                                    <th>Avaliacao</th>
                                </tr>
                            </thead>
                            <tbody>
                                { 
                                    produtos.map(p => { 
                                        return <tr key={p.codigo}
                                                    onClick={() => selecionarProduto(p)} 
                                                    style={getStyleProduto(p)}
                                                >
                                                <td>{p.codigo}</td>
                                                <td>{p.nome}</td>
                                                <td>{p.preco}</td>
                                                <td>
                                                    {p.urlImagem ?
                                                            <img src={p.urlImagem} style={{ height: 100, width: 100 }} alt={p.nome}/>
                                                        :   <p>Sem imagem</p>
                                                    }
                                                </td>
                                                <td><Avaliacao valor={p.avaliacao}/></td>
                                            </tr>
                                    })
                                }
                            </tbody>
                        </table>
                }
            </TemaContext.Consumer>
    )
}

export default ProdutoListar;