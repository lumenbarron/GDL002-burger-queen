import React from "react";
import { almuerzo } from "./almuerzo.json";
import { Tickets } from './Tickets';

export class LunchCards extends React.Component {
  constructor() {
    super();
    this.state = {
      almuerzo,
      orders: []
    };
  }

print = (event) => {
  const target=event.currentTarget;
  const name = target.getAttribute('name')
  const price= target.getAttribute('value')
  const order = {
    name, 
    price
  }
console.log('funcionando' + name);
this.setState({ orders: [...this.state.orders, order]})

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
      <section className="row">
        <section className='breakfastContentCards'>
          <div>{luch}</div>
          <div><Tickets order={this.state.orders} /></div>
        </section>
        <section></section>
      </section>
    ) 
  }
}

