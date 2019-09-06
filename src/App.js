import React,{Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/home';
import Nosotros from './components/nosotros';
import Contacto from './components/contacto';
import Talleres from './components/talleres';
import Header from './components/header';
import Error from './components/error';


import Router from './components/router'


export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path="/"component={Home} />
                    <Route exact path="/nosotros"component={Nosotros} />
                    <Route exact path="/tallerescursos"component={Talleres} />
                    <Route exact path="/contacto"component={Contacto} />
                    <Route component={Error}/>
                </Switch>
                <Header/>
      </BrowserRouter>
  );
  }
}
// export default class App extends Component {

//   render() {
//     return (
//       <Router />
//   );
//   }
// }

