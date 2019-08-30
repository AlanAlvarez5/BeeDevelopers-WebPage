import React,{Component} from 'react';
import './contacto.css';

export default class Contacto extends Component {

    render() {
        return (
          <div className="contacto">

            <div className="informacion">
              <h2>Contacto</h2>
              <p>Teléfono: (464) 646-46-46</p>
              <p>E-mail: b.dev@gmail.com</p>
              <p>
                Domicilio: Oficinas de CEMER. Camino a Palo Blanco
                #227 Salamanca, Guanajuato.
              </p>
            </div>

            <div className="redes-sociales">
              <h2>Redes Sociales</h2>
              <div className="contacto-links">
                <div className="facebook">
                  <a href="https://www.facebook.com/BeeDevelopersUG/" target="blank">
                    <i class="fab fa-facebook-square"></i>
                  </a>
                </div>
                <div className="youtube">
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="blank">
                    <i class="fab fa-youtube"></i>
                  </a>
                </div>
                <div className="instagram">
                  <a href="https://www.instagram.com/beedevelopers/?hl=es-la" target="blank">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
                <div className="twitter">
                  <a href="https://www.twitter.com/" target="blank">
                    <i class="fab fa-twitter-square"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
    }
}