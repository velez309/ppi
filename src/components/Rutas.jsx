import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../paginas/Home";
import Iniciosesion from "../paginas/InicioSesion";
import Registro from "../paginas/Registro";

function Rutas() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/iniciarsesion" component={Iniciosesion} />
          <Route exact path="/registro" component={Registro} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default Rutas;
