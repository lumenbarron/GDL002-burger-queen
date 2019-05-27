import React from 'react';
import {LunchContainer} from './LunchContainer';

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
              className="btn buttonsInicio" 
              href="1.2" id= "buttonLunch">
              Almuerzo
              </a>
              {this.state.show && <LunchContainer className="showCards" />}
            </section>
    )
    }
  }