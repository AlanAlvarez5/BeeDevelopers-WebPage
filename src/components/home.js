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
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Quibusdam aliquam repellendus nisi commodi natus
                  maiores enim fuga quae nostrum. Reprehenderit aliquid
                  delectus voluptas quidem quos iure, vero esse ipsam
                  sequi?
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
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit.Quibusdam aliquam repellendus nisi commodi natus
                maiores enim fuga quae nostrum.
              </p>
              </div>
            </div>
            <div className="home-seccion2">
              <h2>Aprende lo último</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit.Quibusdam aliquam repellendus nisi commodi natus
                maiores enim fuga quae nostrum. Lorem ipsum dolor sit
                amet consectetur adipisicing elit.Quibusdam aliquam
                repellendus nisi commodi natus maiores enim fuga quae
                nostrum.
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