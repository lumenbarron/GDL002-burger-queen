//import React, {Component} from 'react';
import React from 'react'
import './App.css';
import './styles/Buttons.css';
import {Buttons} from './components/buttonsHome';

import {BreakfastMenu} from './components/BreakfastMenu';
import {Form} from './components/Form';
//import {desayuno} from './desayuno.json'

// class App extends React.Component {
//   constructor (props) {
//     super (props);
//     this.state = { 
//       desayuno : desayuno
//     };
//     this.handleAddBreakfast = this.handleAddBreakfast.bind(this);
//   }

//   handleAddBreakfast (desayuno) {
//     this.setState({
//       desayuno : [...this.state.desayuno, desayuno ]
//     })
//   }

//   handleDelete (index) {
//     this.setState({
//       desayuno: this.state.desayuno.filter((element , i) => {
//         return i !== index
//       })
//     })
//     //console.log(index);
    
//   }
//   render () {
//     const breakfast = this.state.desayuno
//     .map((item , i) => {
//       return (
//       <div className="col-md-4">
//         <div className="card mt-4"> 
//           <div className="card-header">
//             <h3>{item.title}</h3>
//           </div>
//           <div className="card-body">
//             <p>{item.price}</p>
//           </div>
//           <div className='card-footer'>
//           <button className ='btn btn danger' 
//           onClick={this.handleDelete.bind(this, i)}>
//           Borrar
//           </button>
//           </div>
//         </div>
//       </div>
//       )
//     })
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Buttons/>
//       </header>

//       <Navigation />
//       <Form onAddBreakfast = {this.handleAddBreakfast} />
//       <span className = "badge badge-pill badge-light ml-2">
//         {this.state.desayuno.length}
//         </span>
//       <div className="container">
//         <div className="row mt-4">
//         {breakfast}
        
//         </div>
        
//       </div>
//       <p>
        
//       </p>
//     </div>
//   );
// }
// }

//  export default App;


class App extends React.Component {
  // constructor (props) {
  //   super (props);
  //   this.state = { 
  //     desayuno : desayuno
  //   };
  //   this.handleAddBreakfast = this.handleAddBreakfast.bind(this);
  // }

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
  return (
    <div className="App">
      <header className="App-header">
        <Buttons/>
      </header>

      
      <BreakfastMenu  />
      <Form onAddBreakfast = {this.handleAddBreakfast} />
      {/* <span className = "badge badge-pill badge-light ml-2">
        {this.state.desayuno.length}
        </span>
      <div className="container">
        <div className="row mt-4"> */}
        {/* {breakfast} */}
        
        </div>

  );
}
}

 export default App;

