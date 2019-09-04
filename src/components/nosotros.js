import React,{Component} from 'react';

import "./nosotros.css"

export default class Nosotros extends Component {

    render() {
        return (
            <div className="nosotros">

                <h2>Sobre Nosotros</h2>
                <div className="nosotros-section1">
                    <img src="img/grupo2.jpeg" alt="group"/>
                    <p>El grupo inició a finales de 2018 con varios alumnos de la carrera de Sistemas Computacionales de distintos semestres unidos por el propósito común de expadir los conocimientos del programa escolar. Bajo la coordinación del Dr. Juan Carlos Carranza se sentaron las bases de lo que sería BeeDevelopers.
                    </p>
                </div>

                <div className="vl"></div>

                <div className="nosotros-section2">
                    <h2>Misión</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Quibusdam aliquam 
                        repellendus nisi commodi natus maiores enim fuga quae nostrum. 
                        </p>
                    <h2>Visión</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Quibusdam aliquam 
                        repellendus nisi commodi natus maiores enim fuga quae nostrum. 
                        </p>
                </div>

                <div className="vl"></div>

                <div className="nosotros-section3">
                    <h2>Nuestro equipo</h2>
                    <p>Nuestro comité es el encargado de escuchar las propuestas de los miembros del grupo además de coordinar los eventos más importantes. Se hacen reuniones cada dos semanas con todos los miembros de BeeDevelopers y los miembros del comité en dónde se acuerdan las actividades de los diversos eventos que se harán.
                    </p>
                </div>
                <div className="nosotros-equipo">
                    <div className="nosotros-miembro">
                        <div className="nosotros-miembro-imagen">
                            <img src="/img/alan.jpg" alt="man"/>
                        </div>
                        <div className="nosotros-texto-miembro">
                            <h3>
                                Presidente
                            </h3>
                            <p>Alan Alvarez</p>
                        </div>
                    </div>
                    <div className="nosotros-miembro">
                        <div className="nosotros-miembro-imagen">
                            <img src="/img/Manuel2.jpeg" alt="man"/>
                        </div>
                        <div className="nosotros-texto-miembro">
                            <h3>
                            Secretario
                            </h3>
                            <p>Manuel Espinoza</p>
                        </div>
                    </div>
                    <div className="nosotros-miembro">
                        <div className="nosotros-miembro-imagen">
                            <img src="/img/man.jpg" alt="man"/>
                        </div>
                        <div className="nosotros-texto-miembro">
                            <h3>
                                Tesorero
                            </h3>
                            <p>Idalid Ávila</p>
                        </div>
                    </div>
                    <div className="nosotros-miembro">
                        <div className="nosotros-miembro-imagen">
                            <img src="/img/man.jpg" alt="man"/>
                        </div>
                        <div className="nosotros-texto-miembro">
                            <h3>
                                Vicepresidente
                            </h3>
                            <p>Valeria Cortés</p>
                        </div>
                    </div>
                </div>

                <h2>Bee Developers</h2>
                <div  className="nosotros-grupo">
                    <div className="nosotros-grupo1">
                        <img src="/img/grupo1.jpeg" alt="group"/>
                    </div>
                </div>
            </div>
        );
    }
}