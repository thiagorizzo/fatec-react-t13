import ReactDOM from "react-dom";
import PaginaPrincipal from "./components/PaginaPrincipal"
import Sobre from "./components/Sobre";
import 'bootstrap/dist/css/bootstrap.css';
import TemaContext from './contexts/TemaContext';

ReactDOM.render(<TemaContext.Provider value="light">
                  <PaginaPrincipal cor="red"/>
                  <Sobre/>
                </TemaContext.Provider>, document.getElementById("root"))