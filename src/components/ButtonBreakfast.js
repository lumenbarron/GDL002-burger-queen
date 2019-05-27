import React from 'react';
import {BreakfastContainer} from './BreakfastContainer';

export class ButtonBreakfast extends React.Component {
    constructor (props) {
      super (props)
      this.state = { 
        show : false,
        showBreakfast: false,
        showLunch: false,
      };
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
              className="btn buttonsInicio" 
              href="1.1" id= "buttonBreakfast">
              Desayuno
              </a>
              {this.state.show && <BreakfastContainer className="showCards" />}
          </section>
    )
    }
  }