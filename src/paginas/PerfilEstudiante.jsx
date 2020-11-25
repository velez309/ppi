import React from "react";
//import "../components/styles/Iniciosesion.css";
import { Link } from "react-router-dom";

class PerfilEstudiante extends React.Component {
  render() {
    return (
      <div>
        <button type="button" class="btn btn-outline-primary">
          <Link to="/Quiz1" className="btn btn-light">
            Nivel 1
          </Link>
        </button>
        <button type="button" class="btn btn-outline-info">
          <Link to="/Quiz" className="btn btn-light">
            Nivel 2
          </Link>
        </button>
        <button type="button" class="btn btn-success">
          Atrás
        </button>
      </div>
    );
  }
}

export default PerfilEstudiante;
