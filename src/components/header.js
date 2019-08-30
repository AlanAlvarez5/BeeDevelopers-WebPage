import React, { Component } from "react";
import {Link} from 'react-router-dom';
import './header.css';


export default class Header extends Component {
  render() {
    return (
      <header className="header">
            <Link className="header-logotipo" to="/">
              <img className="header-logo1" src="img/logo1_sintexto.png" alt="logo2" />
              <img className= "header-logo2" src="img/logo2.png" alt="Logo" />
            </Link>

            <nav className="header-navegacion">
              <Link to="/nosotros">¿Quiénes Somos?</Link>
              <Link to="/tallerescursos">Talleres y Cursos</Link>
              <Link to="/contacto">Contacto</Link>
            </nav>
      </header>
    );
  }
}
