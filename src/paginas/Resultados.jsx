import React from "react";
//import "../components/styles/Iniciosesion.css";
import { Link } from "react-router-dom";

class Resultados extends React.Component {
  render() {
    return (
      <div>
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Mariana Salome
            <span class="badge badge-primary badge-pill">40/100</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Sebastian Díaz
            <span class="badge badge-primary badge-pill">20/100</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Camila Ramirez
            <span class="badge badge-primary badge-pill">100/100</span>
          </li>
        </ul>
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Luisa Montes
            <span class="badge badge-primary badge-pill">90/100</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Javier Castro
            <span class="badge badge-primary badge-pill">28/100</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Valentina Sanas
            <span class="badge badge-primary badge-pill">19/100</span>
          </li>
        </ul>
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Laura Agudelo
            <span class="badge badge-primary badge-pill">25/100</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Diego Caicedo
            <span class="badge badge-primary badge-pill">20/100</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Alex Martinez
            <span class="badge badge-primary badge-pill">50/100</span>
          </li>
        </ul>
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Brihana Sanchez
            <span class="badge badge-primary badge-pill">40/100</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Lucia Gomez
            <span class="badge badge-primary badge-pill">20/100</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Laura Castillo
            <span class="badge badge-primary badge-pill">10/100</span>
          </li>
        </ul>
        <button type="Atrás" class="btn btn-success">
          <Link to="/PerfilDocente" className="btn btn-light">
            Atrás
          </Link>
        </button>
      </div>
    );
  }
}

export default Resultados;
