import React from "react";
//import "../components/styles/Iniciosesion.css";
import { Link } from "react-router-dom";

class PerfilDocente extends React.Component {
  render() {
    return (
      <div>
        <button type="button" class="btn btn-outline-primary">
          <Link to="/AñadirGrupo" className="btn btn-light">
            Añadir Nuevo grupo
          </Link>
        </button>
        <button type="button" class="btn btn-outline-info">
          <Link to="/Resultados" className="btn btn-light">
            Resultados
          </Link>
        </button>
        <button type="button" class="btn btn-success">
          Atrás
        </button>
      </div>
    );
  }
}

export default PerfilDocente;
