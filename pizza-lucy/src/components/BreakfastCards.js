import React from "react";
import { desayuno } from "./desayuno.json";

export class BreakfastCards extends React.Component {
  constructor() {
    super();
    this.state = {
      desayuno
    };
  }

print = (event) => {
  const target=event.currentTarget;
  const name = target.getAttribute('name')
console.log('funcionando' + name);

}
  render() {
    const breakfast = this.state.desayuno.map((item, i) => {
      return (
            <button className = " btn breakfastCards" name ={item.title} value={item.price} onClick={this.print}>
              {item.title} ${item.price}
            </button>
      );
    });
    return(

        <section className='breakfastContentCards'>
          {breakfast}
        </section>
      
    ) 
  }
}

