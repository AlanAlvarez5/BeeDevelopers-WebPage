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
                <h2>Misión</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Quibusdam aliquam 
                repellendus nisi commodi natus maiores enim fuga quae nostrum. 
                </p>
                <h2>Visión</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Quibusdam aliquam 
                    repellendus nisi commodi natus maiores enim fuga quae nostrum. 
                </p>
                <hr/>
                <h2>Nuestro equipo</h2>
                <div className="equipo">
                    <div className="miembro">
                        <img src="/img/man.jpg" alt="man"/>
                        <h3>
                            Presidente
                        </h3>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="miembro">
                        <img src="/img/man.jpg" alt="man"/>
                        <h3>
                            Vicepresidente
                        </h3>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="miembro">
                        <img src="/img/man.jpg" alt="man"/>
                        <h3>
                            Secretario
                        </h3>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="miembro">
                        <img src="/img/man.jpg" alt="man"/>
                        <h3>
                            Tesorero
                        </h3>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>

                <h2>Bee Developers</h2>
                <img className="grupo" src="/img/group.jpg" alt="group"/>
            </div>
        );
    }
}