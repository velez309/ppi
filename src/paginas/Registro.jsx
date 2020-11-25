import React from "react";
//import "../components/styles/Iniciosesion.css";
import { Link } from "react-router-dom";

class Registro extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Nombre:</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="user"
            />
          </div>

          <div className="form-group">
            <label>Apellido:</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="pass"
            />
          </div>
          <div className="form-group">
            <label>Correo:</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="pass"
            />
          </div>
          <div className="form-group">
            <label>Contraseña:</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="pass"
            />
          </div>
          <label>Perfil:</label>
          <select class="form-control form-control-lg">
            <option>Seleccione una opción</option>
            <option>Estudiante</option>
            <option>Docente</option>
          </select>
          <br />
          <Link to="/PerfilDocente" className="btn btn-light">
            Registrar
          </Link>
        </form>
      </div>
    );
  }
}

export default Registro;
