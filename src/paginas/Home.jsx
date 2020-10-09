import React from "react";
/* import { Link } from "react-router-dom";
import header from "../images/header.png"; */

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container"></div>
          </div>
        </div>
        <h1 className="maintitle">A través del tiempo</h1>
        <div class="with-bg-size"></div>

        <div class="ingresar-card">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              {/*  <Link to="/iniciarsesion" className="ingresar btn btn-light">
                Iniciar sesión
              </Link> */}
            </li>
            <li class="list-group-item">
              {/*   <Link to="/registro" className="ingresar btn btn-light">
                Registrarse
              </Link> */}
            </li>
          </ul>
        </div>

        <div class="card-deck">
          <div class="card">
            <img
              src="https://globisinsights.com/wp-content/uploads/2019/04/iStock-528067094-Aleutie-2052-1024x683.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Situación del problema</h5>
              <p class="card-text">
                En él área de tecnología e informática de Santos Ángeles
                Custodios se necesita reforzar el conocimiento de cambios
                importantes en la tecnología a través del tiempo.
              </p>
            </div>
          </div>
          <div class="card">
            <img
              src="https://myofficein.ph/wp-content/uploads/2018/10/Killer-Moves-to-Boost-Confidence-and-Success-at-Work.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Objetivo</h5>
              <p class="card-text">
                Es crear una aplicación para la institución educativa santos
                ángeles custodios en el área de tecnología e informática para
                los grados sexto y séptimo de básica secundaria para reforzar el
                conocimiento de los cambios de la evolución de la tecnología a
                través del tiempo
              </p>
            </div>
          </div>
        </div>

        <div class="card-deck card text-center">
          <div class="card-body">
            <h5 class="card-title">Sobre nosotros</h5>
            <p class="card-text">
              Somos estudiantes de la institución educativa santos angeles
              custodios del grado 11-2 también somos de la media técnica
              desarrollo de software
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
