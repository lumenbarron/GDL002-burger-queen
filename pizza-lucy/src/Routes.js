import React from 'react';
import { Route , Switch } from 'react-router-dom';

import App from './App';
import Home from './components/Home';
import Waiter from './components/Waiter';
import Kitchen from './components/Kitchen';

const AppRoutes = () => 
    <App>
        <Switch>
            <Route path="/" component = {Home} />
            <Route path="/Waiter" component = {Waiter} />
            <Route path="/Kitchen" component = {Kitchen} />

        </Switch>
    </App>

export default AppRoutes;