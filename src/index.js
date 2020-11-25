import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import "react-bootstrap";
import Rutas from "./components/Rutas";
//import Quiz from "./paginas/Quiz";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Rutas />
  </React.StrictMode>,
  rootElement
);
