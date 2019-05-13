//import React, {Component} from 'react';
import React from 'react'
import './App.css';
import ButtonWaiter from './components/button';
import {Navigation} from './components/Navigation';
import {Form} from './components/Form';
import {desayuno} from './desayuno.json'


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1 >Lucy lu</h1>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <Button />
//     </div>
//   );
// }

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = { 
      desayuno : desayuno
    };
    this.handleAddBreakfast = this.handleAddBreakfast.bind(this);
  }

  handleAddBreakfast (desayuno) {
    this.setState({
      desayuno : [...this.state.desayuno, desayuno ]
    })
  }
  
  handleDelete (index) {
    this.setState({
      desayuno: this.state.desayuno.filter((element , i) => {
        return i !== index
      })
    })
    //console.log(index);
    
  }
  render () {
    const breakfast = this.state.desayuno
    .map((item , i) => {
      return (
      <div className="col-md-4">
        <div className="card mt-4"> 
          <div className="card-header">
            <h3>{item.title}</h3>
          </div>
          <div className="card-body">
            <p>{item.price}</p>
          </div>
          <div className='card-footer'>
          <button className ='btn btn danger' 
          onClick={this.handleDelete.bind(this, i)}>
          Borrar
          </button>
          </div>
        </div>
      </div>
      )
    })
  return (
    <div className="App">
      <header className="App-header">
        <h1 >Lucy lu</h1>
        <ButtonWaiter />
      </header>
      
      <Navigation title='Mi primera navegación' />
      <Form onAddBreakfast = {this.handleAddBreakfast} />
      <span className = "badge badge-pill badge-light ml-2">
        {this.state.desayuno.length}
        </span>
      <div className="container">
        <div className="row mt-4">
        {breakfast}
        
        </div>
        
      </div>
      <p>
        
      </p>
    </div>
  );
}
}

 export default App;
