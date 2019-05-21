import React from 'react';
import {BreakfastCards} from './BreakfastCards';

export class ButtonBreakfast extends React.Component {
    constructor (props) {
      super (props)
      this.state = { show : false};
      // this.toggleDiv = this.toggleDiv.bind(this)
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
              {this.state.show && <BreakfastCards className="showCards" />}
          </section>
    )
    }
  }