import React from 'react';
import {LunchCards} from './LaunchCards';

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
            <article>
              <a
              onClick={ this.toggleDiv}
              className="btn buttonsInicio" 
              href="1.2" id= "buttonAlmuerzo">
              Almuerzo
              </a>
              {this.state.show && <LunchCards className="showCards" />}
            </article>
    )
    }
  }