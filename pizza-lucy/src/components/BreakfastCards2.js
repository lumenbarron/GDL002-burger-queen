import React from "react";
import { Tickets } from './Tickets';
import {CustomerInput} from './CustomerInput';
import firebase from './firebaseFirestore';


export class BreakfastCards2 extends React.Component {
  constructor(props) {
    super(props);
    this.ref=firebase.firestore().collection('desayuno');
    this.refOrder=firebase.firestore().collection('comandas');
    this.unsubscribe = null;
    this.state = {
      desayuno: [],
      orders: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const desayuno = [];
    querySnapshot.forEach((doc) => {
        const { title, price } = doc.data();
        desayuno.push({
            key : doc.id,
            doc,
            title,
            price
        });
    });
    this.setState({desayuno});
  }


  componentDidMount(){
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }


print = (event) => {
  const target=event.currentTarget;
  const name = target.getAttribute('name')
  const price = target.getAttribute('value')
  const id = target.getAttribute('key')
  const order = {
    id,
    name, 
    price
  }

  this.setState({ orders : [...this.state.orders, order] })

}

onChange = (e) => {
    const state = this.state.orders
    state[e.target.name] = e.target.value;
    this.setState(state);
}

sendOrders = (e) => {
    e.preventDefault ();
    console.log('holi');

    firebase.doc('comandas').add(this.state.orders)
}


  render() {
    const breakfast = this.state.desayuno.map((item, i) => {
      return (
            <button 
            className = " btn foodCards" 
            key = {i} name ={item.title} 
            value={item.price} 
            onClick={this.print}>
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
            order={this.state.orders}
            sendOrders={this.sendOrders}
            />
          </section>
        </section>
      </section>
        
      
    ) 
  }
}

