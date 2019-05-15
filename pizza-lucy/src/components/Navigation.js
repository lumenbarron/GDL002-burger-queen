import React from 'react';


// export class Navigation extends React.Component {
//   render () {
//       return (
//   <nav className="nav nav-pills flex-column flex-sm-row">
//     <a className="flex-sm-fill text-sm-center nav-link " href="1.2">
//     Inicio
//     {this.props.title}
//     </a>
//     <a className="flex-sm-fill text-sm-center nav-link active" href="1.1">Desayuno</a>
//     <a className="flex-sm-fill text-sm-center nav-link disabled" href="1"  aria-disabled="true">Almuerzo</a>
//   </nav>
//   )
//   }
// }

export class Navigation extends React.Component {
  render () {
      return (
        <section className='container'>
          <section className='row'> 
          <section className ='col-md-1'></section>
            <nav className="nav nav-pills nav-fill col-md-10">
              <a className="nav-item nav-link buttonsInicio" href="1.2"  id= "buttonInicio"> Inicio</a>
              <a className="nav-item nav-link buttonsInicio" href="1.1" id= "buttonDesayuno">Desayuno</a>
              <a className="nav-item nav-link buttonsInicio" href="1" id= "buttonAlmuerzo" >Almuerzo</a>
              <a className="nav-item nav-link buttonsInicio" href="1.3" id= "buttonComandas"> Comandas </a>
            </nav>
            <section className ='col-md-1'></section>  
          </section>
        </section>
  )
  }
}

// return (
//   <section className='container'>
//       <section className='row'>
//           <section className ='col-md-2'></section>
//           <section className ='col-md-8 buttonsContent'>
//               <button className="btn btn-success buttonsIntro">
//                   Meseros
//               </button>
//               <button className="btn btn-danger buttonsIntro">
//                   Cocina
//               </button>
//           </section>
//           <section className ='col-md-2'></section>
//       </section>
//   </section>
// )
// }
// }


// export class Navigation extends React.Component {
//     render () {
//         return (
//     <nav className="nav nav-pills flex-column flex-sm-row">
//       <a className="flex-sm-fill text-sm-center nav-link " href="1.2">
//       Inicio
//       {this.props.title}
//       </a>
//       <a className="flex-sm-fill text-sm-center nav-link active" href="1.1">Desayuno</a>
//       <a className="flex-sm-fill text-sm-center nav-link disabled" href="1"  aria-disabled="true">Almuerzo</a>
//     </nav>
//     )
//     }
// }



//export default Navigation