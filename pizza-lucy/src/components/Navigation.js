import React from 'react';
import {BreakfastCards} from './BreakfastCards';
import {LunchCards} from './LaunchCards';

export class Navigation extends React.Component {
  constructor () {
    super ()
    this.state = { isHidden: false}
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  render () {
      return (
          <section className='row'> 
          <section className ='col-md-1'></section>
            <nav className="nav nav-pills nav-fill col-md-10">
              <a className="nav-item nav-link buttonsInicio" href="1.2"  id= "buttonInicio"> Inicio</a>
              <a onClick={this.toggleHidden.bind(this)} className="nav-item nav-link buttonsInicio" href="1.1" id= "buttonDesayuno">Desayuno</a>
              <a className="nav-item nav-link buttonsInicio" href="1" id= "buttonAlmuerzo" >Almuerzo</a>
              <a className="nav-item nav-link buttonsInicio" href="1.3" id= "buttonComandas"> Comandas </a>
            </nav>
            {!this.state.isHidden && <LunchCards />}
            <section className ='col-md-1'></section>  
          </section>

  )
  }
}

// export class Navigation extends React.Component {
//   render () {
//       return (
//           <section className='row'> 
//           <section className ='col-md-1'></section>
//             <nav className="nav nav-pills nav-fill col-md-10">
//               <a className="nav-item nav-link buttonsInicio" href="1.2"  id= "buttonInicio"> Inicio</a>
//               <a className="nav-item nav-link buttonsInicio" href="1.1" id= "buttonDesayuno">Desayuno</a>
//               <a className="nav-item nav-link buttonsInicio" href="1" id= "buttonAlmuerzo" >Almuerzo</a>
//               <a className="nav-item nav-link buttonsInicio" href="1.3" id= "buttonComandas"> Comandas </a>
//             </nav>
//             <section className ='col-md-1'></section>  
//           </section>

//   )
//   }
// }