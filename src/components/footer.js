import React, { Component } from "react";
//import {Link} from 'react-router-dom';
import './header.css';


export default class Footer extends Component {
  render() {
    return (
      <header>
        <div className="contenedor">
          <div className="barra">
            <a href="/">
                <img src="img/logo2.png" alt="Logo"/>
            </a> 

            <nav className="navegacion">
              <a href="/nosotros">¿Quienes Somos?</a>
              <a href="/tallerescursos">Talleres y Cursos</a>
              <a href="/contacto">Contacto</a>
            </nav>
          </div>

          <div className="texto-header">
            <h2 className="no-margin">Grupo Organizado</h2>
          </div>
        </div>
      </header>
    );
  }
}
