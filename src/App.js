import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import {Home} from './components/Home';
import {Menus} from './components/Menus';
import {Kitchen} from './components/Kitchen';
// import {Orders} from './components/Orders'


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component = {Home} />
      <Route path="/waiter" component = {Menus} />
      <Route path="/kitchen" component = {Kitchen} />
      <Route path="/orders" component = {Kitchen} />
    </Switch>
  </BrowserRouter>
)

export default App;
