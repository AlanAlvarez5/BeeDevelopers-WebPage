import React, { Component } from "react";
//import {Link} from 'react-router-dom';
import './footer.css';


export default class Footer extends Component {
  render() {
    return (
      <header>
        <div className="contenedor">
          <div className="barra">
            <div className="logotipo">
              <a href="/">
                <img className="logo1" src="img/logo1_sintexto.png" alt="logo2" />
                <img className= "logo2" src="img/logo2.png" alt="Logo" />
              </a>
            </div>

            <nav className="navegacion">
              <a href="/nosotros">¿Quienes Somos?</a>
              <a href="/tallerescursos">Talleres y Cursos</a>
              <a href="/contacto">Contacto</a>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
