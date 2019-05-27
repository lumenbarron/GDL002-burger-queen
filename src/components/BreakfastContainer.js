import React from "react";
import { Tickets } from './Tickets';
import {CustomerInput} from './CustomerInput';
import firebase from './firebaseFirestore';


export class BreakfastContainer extends React.Component {
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
  const id = target.getAttribute('name')
  const order = {
    id,
    name, 
    price : Number(price)
  }

  this.setState({ orders : [...this.state.orders, order] })

}

deleteItem = ( id) => {
  const updateOrders =this.state.orders.filter(item => {
    return item !== id
  });
  this.setState({orders : [...updateOrders]})
  
}

onChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
}

sendOrders = (e) => {
    e.preventDefault ();
    console.log('subiendo a firestore');
    const db = firebase.firestore();
    db.collection('comandas').add({
     orders : this.state.orders
    })
}

  render() {
    const breakfast = this.state.desayuno.map((item, i) => {
      return (
            <button 
            className = " btn foodCards" 
            key = {i}    
            name ={item.title} 
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
            delete = {this.deleteItem}
            sendOrders={this.sendOrders}
            onChange={this.onChange}
            />
          </section>
        </section>
      </section>
    ) 
  }
}

