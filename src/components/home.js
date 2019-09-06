import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import "./home.css";

export default class Home extends Component {

    render() {
        return (
          <div className="home">
            <div className="home-top" data-parallax="scroll">
              <div className="home-top-titulo">
                <h1>Desarrollo de Software para Todos</h1>
                <p>
                  BeeDevelopers es el grupo organizado de la Universidad de Guanajuato enfocado en el desarrollo de software. Aprende desde las bases de la programación hasta los frameworks más modernos. Tenemos cursos y talleres para personas de cualquier nivel.
                </p>
                <Link to="/nosotros">
                  <button className="btn-2 btn-2g btn">Conoce más
                  </button>
                </Link>
              </div>
            </div>
            <div className="home-seccion1">
              <img src="img/student.svg" alt="Estudiante" />
              <div className="home-seccion1-descr">
                <h2>De estudiantes para estudiantes</h2>
                <p>
                  El trabajo colaborativo es parte de la identidad de BeeDevelopers. Nos enfocamos a reunir personas con distintos conocimientos y habilidades para después compartirlos e incrementar los skills del resto del grupo. 
                </p>
              </div>
            </div>
            <div className="home-seccion2">
              <h2>Aprende lo último</h2>
              <p>
                Crear un servidor en NodeJS, usar una librería de inteligencia artificial en Python, consumir una API. ¿No sabes cómo hacerlo? Estás en el sitio indicado. No estamos limitados a un solo tipo de herramienta sino que incluimos una gran variedad de lenguajes y te animamos a descubrir aún más.
              </p>
              <div className="home-lenguajes">
                      <img src="img/python.png" alt="python" />
                      <img src="img/node.png" alt="node.js" />
                      <img src="img/ruby.png" alt="ruby" />
                      <img src="img/react.png" alt="react" />
                      <img src="img/html.png" alt="html" />
                      <img src="img/js.png" alt="js" />
              </div>
              
              <Link to="/tallerescursos"><button className="btn btn-2g btn-2">Talleres y Cursos </button></Link>
            </div>
          </div>
        );
    }
}