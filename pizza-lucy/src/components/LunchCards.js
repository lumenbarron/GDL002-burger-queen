import React from "react";
import { almuerzo } from "./almuerzo.json";
import { Tickets } from './Tickets';
import {CustomerInput} from './CustomerInput';

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
this.setState({ orders: [...this.state.orders, order]})

}
  render() {
    const luch = this.state.almuerzo.map((item, i) => {
      return (
            <button className = " btn foodCards" name ={item.title} value={item.price} onClick={this.print}>
              {item.title} ${item.price}
            </button>
      );
    });

    return(
      <section >
        <section className='foodContentCards lunchContainerCards'>
        <CustomerInput />
          <section className='foodItems'>{luch}</section>
            <section className='itemsTickets'>
              <Tickets 
              order={this.state.orders} />
            </section>
        </section>
      </section>
    ) 
  }
}

