import React from "react";

class Ajustes extends React.Component {
  render() {
    return (
      <div className="Ajustes">
        <div className="Ajustes _header">
          <p>
            <h1> AJUSTES </h1>
            <h3> Información del usuario </h3>
            <h3>Actualiza tu nombre y tu dirección de correo electronico</h3>
            <center>
              <button>Nombre</button>
            </center>
            <br />
            <br />
            <center>
              <button>Correo electronico </button>
            </center>
            <br />
            <br />
            <center>
              <button>Contraseña</button>
            </center>
          </p>
        </div>
        <button type="button" class="btn btn-success">
          Atrás
        </button>
      </div>
    );
  }
}
export default Ajustes;
