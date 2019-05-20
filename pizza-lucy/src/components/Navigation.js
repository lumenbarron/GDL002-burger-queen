import React from 'react';
import {BreakfastCards} from './BreakfastCards';
import {LunchCards} from './LaunchCards';
import {Link} from 'react-router-dom';

// export class Navigation extends React.Component {
//   constructor () {
//     super ()
//     this.state = { isHidden: false}
//   }

//   toggleHidden (e) {
//     e.preventDefault();
//     this.setState({
//       isHidden: !this.state.isHidden
//     })
//   }
//   render () {
//       return (
//           <section className='row'> 
//           <section className ='col-md-1'></section>
//             <nav className="nav nav-pills nav-fill col-md-10">
//               <a className="nav-item nav-link buttonsInicio" href="1.2"  id= "buttonInicio"> Inicio</a>
//               <a onClick={this.toggleHidden.bind(this)} className="nav-item nav-link buttonsInicio" href="1.1" id= "buttonDesayuno">Desayuno</a>
//               <a className="nav-item nav-link buttonsInicio" href="1" id= "buttonAlmuerzo" >Almuerzo</a>
//               <a className="nav-item nav-link buttonsInicio" href="1.3" id= "buttonComandas"> Comandas </a>
//             </nav>
//             {!this.state.isHidden && <LunchCards />}
//             <section className ='col-md-1'></section>  
//           </section>

//   )
//   }
// }

export class ButtonBreakfast extends React.Component {
  constructor (props) {
    super (props)
    this.state = { show : false};
    this.toggleDiv = this.toggleDiv.bind(this)
  }

  toggleDiv = (e) => {
    e.preventDefault();
    const { show } = this.state;
    this.setState ({ show : !show })
  }
  render () {
      return (
        <section>
            <a 
            onClick={ this.toggleDiv}
            className="nav-item nav-link buttonsInicio" 
            href="1.1" id= "buttonDesayuno">
            Desayuno
            </a>
          
            {this.state.show && <BreakfastCards className="showCards" />}
        </section>
  )
  }
}

export class ButtonLunch extends React.Component {
  constructor (props) {
    super (props)
    this.state = { show : false};
    this.toggleDiv = this.toggleDiv.bind(this)
  }

  toggleDiv = (e) => {
    e.preventDefault();
    const { show } = this.state;
    this.setState ({ show : !show })
  }

  render () {
      return (
        <section> 
            <a
            onClick={ this.toggleDiv}
            className="nav-item nav-link buttonsInicio" 
            href="1.2" id= "buttonAlmuerzo">
            Almuerzo
            </a>
            {this.state.show && <LunchCards className="showCards" />}
        </section>
  )
  }
}

// export class ButtonHome extends React.Component {
//   render () {
//       return (
//           <section > 
//               <a className="nav-item nav-link buttonsInicio" href="1.2"  id= "buttonInicio"> Inicio</a>
//           </section>

//   )
//   }
// }

// export class ButtonOrders extends React.Component {
//   render () {
//       return (
//           <section > 
//               <a className="nav-item nav-link buttonsInicio" href="1.3" id= "buttonComandas"> Comandas </a>
//           </section>

//   )
//   }
// }


export class Navigation extends React.Component {
  render () {
      return (
          <section className='row'> 
          <section className ='col-md-1'></section>
                <Link to='/' className="nav-item nav-link buttonsInicio col-md-2"  id= "buttonInicio">Inicio</Link>
             <section className ='col-md-6'></section>
                <Link to='/orders' className="nav-item nav-link buttonsInicio col-md-2" href="1.3" id= "buttonComandas"> Comandas </Link>
          
            <section className ='col-md-1'></section>  
          </section>

  )
  }
}

