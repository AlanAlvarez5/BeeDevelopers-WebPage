import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import "./home.css";

export default class Home extends Component {

    render() {
        return (
          <div className="home">
            <div className="top" data-parallax="scroll">
              <div>
                <h1>Desarrollo de Software para todos</h1>
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Quibusdam aliquam repellendus nisi commodi natus
                  maiores enim fuga quae nostrum. Reprehenderit aliquid
                  delectus voluptas quidem quos iure, vero esse ipsam
                  sequi?
                </h4>
                <a href="/nosotros">
                  <button>Conoce más</button>
                </a>
              </div>
            </div>
            <div className="seccion1-home">
              <div className="imagen-seccion1">
                <img src="img/img2.jpg" alt="img2" />
              </div>
              <div className="descripcion-seccion1">
              <h2>De estudiantes para estudiantes</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit.Quibusdam aliquam repellendus nisi commodi natus
                maiores enim fuga quae nostrum.
              </p>
              </div>
            </div>
            {/* <div className="imagen2">
              <img src="img/web.png" alt="web" />
            </div> */}
            <div className="titulo-raro">
            <h2>Aprende lo último</h2>
            </div>
            <div className="section2">
              
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit.Quibusdam aliquam repellendus nisi commodi natus
                maiores enim fuga quae nostrum. Lorem ipsum dolor sit
                amet consectetur adipisicing elit.Quibusdam aliquam
                repellendus nisi commodi natus maiores enim fuga quae
                nostrum.
              </p>
            </div>
            <div className="lenguajes">
                <div className="lenguaje-imagen python">
                    <img src="img/python.png" alt="python" />
                </div>
                <div className="lenguaje-imagen node">
                    <img src="img/node.png" alt="node.js" />
                </div>
                <div className="lenguaje-imagen">
                    <img src="img/ruby.png" alt="ruby" />
                </div>
            </div>
            <Link to="/tallerescursos"><button className="boton-talleres">Talleres y Cursos ></button></Link>
          </div>
        );
    }
}