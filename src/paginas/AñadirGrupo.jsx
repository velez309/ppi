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
            <option>Sexto 1</option>
            <option>Sexto 2</option>
            <option>Sexto 3</option>
            <option>Septimo 1</option>
            <option>Septimo 2</option>
            <option>Septimo 3</option>
          </select>
          <br />
          <Link to="/RegistroUsuario" className="btn btn-light">
            Registrar
          </Link>
        </form>
      </div>
    );
  }
}

export default Registro;
