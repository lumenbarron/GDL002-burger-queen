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
  const id = target.getAttribute('name')
  const order = {
   id,
    name, 
    price
  }

  this.setState({ orders : [...this.state.orders, order] })

}

deleteItem = ( id) => {
  console.log('borrando')
  // e.preventDefault();
  const updateOrders =this.state.orders.filter(item => {
    return item !== id
  });
  this.setState({orders : [...updateOrders]})
  
}

// deleteItem = (item) => {
//   console.log('borrando')
//   const newState = this.state.orders.slice();
//   if (newState.indexOf(item)> -1) {
//     newState.splice(newState.indexOf(item),1);
//     this.setState({orders:newState})
    
//   }
// }


onChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
}

sendOrders = (e) => {
    e.preventDefault ();
    console.log('holi');
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots :true
    })
    db.collection('comandas').add({
     orders : this.state.orders
    })
    // this.setState({
    //   orders : []
    // })
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

