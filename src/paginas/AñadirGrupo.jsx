import React from "react";
//import "../components/styles/Iniciosesion.css";
import { Link } from "react-router-dom";

class Registro extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Grupo:</label>
          <select class="form-control form-control-lg">
            <option>Seleccione una opción</option>
            <option>Sexto 1</option>
            <option>Sexto 2</option>
            <option>Sexto 3</option>
            <option>Septimo 1</option>
            <option>Septimo 2</option>
            <option>Septimo 3</option>
          </select>
          <br />
          <Link to="/RegistroGrupo" className="btn btn-light">
            Agregar
          </Link>
          <Link to="/PerfilDocente" className="btn btn-light">
            Atrás
          </Link>
        </form>
      </div>
    );
  }
}

export default Registro;
