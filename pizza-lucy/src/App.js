import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import {Home} from './components/Home';
import {Waiter} from './components/Waiter';
import {Kitchen} from './components/Kitchen';
import {Orders} from './components/Orders'


// class App extends React.Component {
//   render () {
//   return (
//     <div className="App">

//       <Home />
//       <Waiter />
    
//     </div>

//   );
// }
// }

// export default App;

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component = {Home} />
      <Route path="/waiter" component = {Waiter} />
      <Route path="/kitchen" component = {Kitchen} />
      <Route path="/orders" component = {Orders} />
    </Switch>
  </BrowserRouter>
)

export default App;
