import React from "react";
//import "../components/styles/Iniciosesion.css";
import { Link } from "react-router-dom";

class RegistroGrupo extends React.Component {
  render() {
    return (
      <div>
        <div class="alert alert-success" role="alert">
          <h4 class="alert-heading">Registro Exitoso!</h4>
          <p>Has sido agregado correctamente</p>
          <Link to="/PerfilDocente" className="btn btn-light">
            Regresar
          </Link>
          <p class="mb-0"></p>
        </div>
      </div>
    );
  }
}

export default RegistroGrupo;
