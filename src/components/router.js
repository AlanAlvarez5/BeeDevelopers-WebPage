import React,{Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './home';
import Nosotros from './nosotros';
import Contacto from './contacto';
import Talleres from './talleres';
import Header from './header';

export default class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path="/"component={Home} />
                    <Route exact path="/nosotros"component={Nosotros} />
                    <Route exact path="/tallerescursos"component={Talleres} />
                    <Route exact path="/contacto"component={Contacto} />
                </Switch>
            
            </BrowserRouter>
        );
    }
}