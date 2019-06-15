import React,{Component} from 'react';
import './contacto.css';

export default class Contacto extends Component {

    render() {
        return (
          <div className="contacto">
            <h2>Redes Sociales</h2>
            <div className="botones">
              <div className="facebook-youtube">
                <div className="a-facebook">
                  <a
                    href="https://www.facebook.com/BeeDevelopersUG/"
                    target="blank"
                  >
                    <button className="facebook">Facebook</button>
                  </a>
                </div>
                <div className="a-youtube">
                  <a
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    target="blank"
                  >
                    <button className="youtube">YouTube</button>
                  </a>
                </div>
              </div>
              <div className="instagram-twitter">
                <div className="a-instagram">
                  <a
                    href="https://www.instagram.com/beedevelopers/?hl=es-la"
                    target="blank"
                  >
                    <button className="instagram">Instagram</button>
                  </a>
                </div>
                <div className="a-twitter">
                  <a href="https://www.twitter.com/" target="blank">
                    <button className="twitter">Twitter</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="informacion">
              <h2>Contacto</h2>
              <div className="items">
                <p>Teléfono: 4646464646</p>
                <p>Correo: b.dev@gmail.com</p>
                <p>
                  Domicilio: Oficinas de CEMER. Camino a Palo Blanco
                  #227 Salamanca, Guanajuato.
                </p>
              </div>
            </div>
            <div className="logo">
              <img
                src="img/logo_fclaro.png"
                alt="Logo sobre fondo claro"
              />
            </div>
          </div>
        );
    }
}