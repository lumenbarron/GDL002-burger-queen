import React from 'react';
import {Link} from 'react-router-dom';

// export class Navigation extends React.Component {
//   render () {
//       return (
//           <section className='row'> 
//           <section className ='col-md-1'></section>
//                 <Link to='/' className="nav-item nav-link buttonsInicio col-md-2"  id= "buttonInicio">Inicio</Link>
//              <section className ='col-md-6'></section>
//                 <Link to='/orders' className="nav-item nav-link buttonsInicio col-md-2" href="1.3" id= "buttonComandas"> Comandas </Link>
          
//             <section className ='col-md-1'></section>  
//           </section>

//   )
//   }
// }

export class Navigation extends React.Component {
  render () {
      return (
          <section className='navigation'> 
          
                <Link to='/' className="btn buttonsInicio"  id= "buttonInicio">Inicio</Link>
             
                <Link to='/orders' className="btn buttonsInicio" id= "buttonComandas"> Comandas </Link>
          
            
          </section>

  )
  }
}



