import React from "react";
import { Link } from "react-router-dom";

class InsigniaEstudiante extends React.Component {
  handleClick = (e) => {
    console.log("Botón presionado");
  };

  //EVENTO FORMULARIO

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Correo:</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="user"
              value={this.props.formValues.user}
            />
          </div>

          <div className="form-group">
            <label>Contraseña:</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="pass"
              value={this.props.formValues.pass}
            />
          </div>

          <Link to="/PerfilEstudiante" className="btn btn-light">
            Continuar
          </Link>
        </form>
      </div>
    );
  }
}
export default InsigniaEstudiante;
