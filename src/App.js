import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Components from "./pages/componenst";

export default () =>
    <BrowserRouter>
        <Switch>
            <Route path={"/"} component={Home} exact />
            <Route path={"/documentation/:component"} component={Components} />
            <Route component={Home}/>
        </Switch>
    </BrowserRouter>