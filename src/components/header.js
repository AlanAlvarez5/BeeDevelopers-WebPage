import React, { Component } from "react";
import {Link} from 'react-router-dom';
import './header.css';


export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="contenedor">
          <div className="barra">
            <div className="logotipo">
              <Link to="/">
                <img className="logo1" src="img/logo1_sintexto.png" alt="logo2" />
                <img className= "logo2" src="img/logo2.png" alt="Logo" />
              </Link>
            </div>

            <nav className="navegacion">
              <Link to="/nosotros">¿Quienes Somos?</Link>
              <Link to="/tallerescursos">Talleres y Cursos</Link>
              <Link to="/contacto">Contacto</Link>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
