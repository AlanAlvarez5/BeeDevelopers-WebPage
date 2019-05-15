import React,{Component} from 'react';
import './error.css';

export default class Error extends Component {

    render() {
        return (
          <div className="error">
            <div className="contenedor-error">
              <div className="texto-error">
                <h2>Error 404 - Page not found</h2>
                <div className="vl"></div>
              </div>
              <img src="img/logo3_sintexto.png" alt="Logo negativo" />
            </div>
          </div>
        );
    }
}