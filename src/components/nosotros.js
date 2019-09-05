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
                        <p>Organizar actividades académicas, de difusión y de vinculación, enfocadas a complementar el perfil de egreso de los estudiantes de la Licenciatura en Ingeniería en Sistemas Computacionales (LISC) de la DICIS-UG, con la finalidad de generar una cohesión estudiantil que ayude a que la LISC tenga una identidad propia dentro de la división y la universidad. Lo anterior en colaboración con otras organizaciones estudiantiles, académicas y profesionales, dentro y fuera de la universidad, fomentando siempre el aprendizaje mutuo y la convivencia entre estudiantes.
                        </p>
                    <h2>Visión</h2>
                        <p>Consolidar una comunidad de estudiantes y egresados de la LISC para el desarrollo de proyectos y actividades académicas, de difusión y de vinculación, que permitan que la esencia de la LISC y de la UG se extienda hacia la sociedad.
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
                            <img src="/img/valeria.png" alt="man"/>
                        </div>
                        <div className="nosotros-texto-miembro">
                            <h3>
                                Vicepresidente
                            </h3>
                            <p>Valeria Cortés</p>
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
                            <img src="/img/idalid.png" alt="man"/>
                        </div>
                        <div className="nosotros-texto-miembro">
                            <h3>
                                Tesorero
                            </h3>
                            <p>Idalid Ávila</p>
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