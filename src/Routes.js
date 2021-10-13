import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Config from './pages/Config';

//Dentro de cada Route está a rota especifica que vai entrar com a rota que foi definida
//ex.: /config vai para a pagina de Config(index de lá)

//Possiveis rotas
function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path = "/">
                <Login/> 
            </Route>
            <Route exact path = "/home">
                <Home/> 
            </Route>

            <Route path="/config">
                <Config/>
            </Route>

            <Route path="/sobre">
                Sobre
            </Route>
        </Switch>
        </BrowserRouter>
    );
}

export default Routes;
