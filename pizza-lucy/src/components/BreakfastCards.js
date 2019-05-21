import React from "react";
import { desayuno } from "./desayuno.json";
import { Tickets } from './Tickets';
import {CustomerInput} from './CustomerInput';

export class BreakfastCards extends React.Component {
  constructor() {
    super();
    this.state = {
      desayuno,
      orders: []
    };
  }

print = (event) => {
  const target=event.currentTarget;
  const name = target.getAttribute('name')
  const price = target.getAttribute('value')
  const order = {
    name, 
    price
  }

  this.setState({ orders : [...this.state.orders, order] })

}
  render() {
    const breakfast = this.state.desayuno.map((item, i) => {
      return (
            <button className = " btn foodCards" name ={item.title} value={item.price} onClick={this.print}>
              {item.title} ${item.price}
            </button>
      );
    });
    return(
      <section >
        <section className='foodContentCards breakfastContainerCards'>
        <CustomerInput />
          <section className='foodItems' >{breakfast}</section>
            <section className='itemsTickets'>
             <Tickets 
            order={this.state.orders} />
          </section>
        </section>
      </section>
        
      
    ) 
  }
}

