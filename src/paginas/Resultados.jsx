import React from "react";
//import "../components/styles/Iniciosesion.css";
import { Link } from "react-router-dom";

class Resultados extends React.Component {
  render() {
    return (
      <div>
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Cras justo odio
            <span class="badge badge-primary badge-pill">14</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Dapibus ac facilisis in
            <span class="badge badge-primary badge-pill">2</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Morbi leo risus
            <span class="badge badge-primary badge-pill">1</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Resultados;
