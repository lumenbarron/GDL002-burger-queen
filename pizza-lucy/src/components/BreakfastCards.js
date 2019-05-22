import React from "react";
import { desayuno } from "./desayuno.json";
import { Tickets } from './Tickets';
import {CustomerInput} from './CustomerInput';
import firebase from './firebase';
// import db from './firebase'

export class BreakfastCards extends React.Component {
  constructor() {
    super();
    this.state = {
      desayuno: [],
      orders: []
    };
  }

  componentDidMount(){
    const dbRef = firebase.database()
    .ref().child('desayuno');
    dbRef.on('value', snap => {
      this.setState({
        desayuno:snap.val()
      })
    })
  }
  // componentDidMount(){
  //   db.collection('desayuno').get()
  //   .then((snapShots) => {
  //     this.setState ({
  //       desayuno: snapShots.docs.map(doc => {
  //         return {title: doc.data(), id:doc.id}
  //       })
  //     })
  //   })
  // }

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
            <button className = " btn foodCards" key = {i} name ={item.title} value={item.price} onClick={this.print}>
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

