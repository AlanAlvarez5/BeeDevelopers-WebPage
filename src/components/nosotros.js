import React,{Component} from 'react';

import "./nosotros.css"

export default class Nosotros extends Component {

    render() {
        return (
            <div className="nosotros">

                <h2>Sobre Nosotros</h2>
                <div className="section1">
                    <img src="img/group.jpg" alt="group"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Quibusdam aliquam 
                    repellendus nisi commodi natus maiores enim fuga quae nostrum. 
                    </p>
                </div>

                <hr/>

                <div className="section2">
                    <h2>Misión</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Quibusdam aliquam 
                        repellendus nisi commodi natus maiores enim fuga quae nostrum. 
                        </p>
                    <h2>Visión</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Quibusdam aliquam 
                        repellendus nisi commodi natus maiores enim fuga quae nostrum. 
                        </p>
                </div>
                <hr/>

                <h2>Nuestro equipo</h2>
                <div className="equipo">
                    <div className="miembro">
                        <div className="miembro-imagen">
                            <img src="/img/man.jpg" alt="man"/>
                        </div>
                        <div className="texto-miembro">
                            <h3>
                                Presidente
                            </h3>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                    <div className="miembro">
                        <div className="miembro-imagen">
                            <img src="/img/man.jpg" alt="man"/>
                        </div>
                        <div className="texto-miembro">
                            <h3>
                            Secretario
                            </h3>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                    <div className="miembro">
                        <div className="miembro-imagen">
                            <img src="/img/man.jpg" alt="man"/>
                        </div>
                        <div className="texto-miembro">
                            <h3>
                                Tesorero
                            </h3>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                    <div className="miembro">
                        <div className="miembro-imagen">
                            <img src="/img/man.jpg" alt="man"/>
                        </div>
                        <div className="texto-miembro">
                            <h3>
                                Vicepresidente
                            </h3>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </div>

                <h2>Bee Developers</h2>
                <div  className="grupo">
                    <div className="grupo1">
                        <img src="/img/group.jpg" alt="group"/>
                    </div>
                </div>
            </div>
        );
    }
}