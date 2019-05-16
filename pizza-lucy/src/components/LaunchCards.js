import React from "react";
import { almuerzo } from "./almuerzo.json";
import "../styles/cards.css";

export class LunchCards extends React.Component {
  constructor() {
    super();
    this.state = {
      almuerzo
    };
  }

print = (event) => {
  const target=event.currentTarget;
  const name = target.getAttribute('name')
console.log('funcionando' + name);

}
  render() {
    const luch = this.state.almuerzo.map((item, i) => {
      return (
            <button className = " btn breakfastCards" name ={item.title} value={item.price} onClick={this.print}>
              {item.title} ${item.price}
            </button>
      );
    });
    return(
      <section className="container">
      <section className="row">
        <section className='breakfastContentCards'>
          {luch}
        </section>
      </section>
      </section>
    ) 
  }
}

