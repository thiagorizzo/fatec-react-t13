import ReactDOM from "react-dom";
import PaginaPrincipal from "./components/PaginaPrincipal"
import Sobre from "./components/Sobre";
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<>
                  <PaginaPrincipal cor="red"/>
                  <Sobre/>
                </>, document.getElementById("root"))