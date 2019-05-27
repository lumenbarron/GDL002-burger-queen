import React from 'react';
import firebase from "./firebaseFirestore";


export class Orders extends React.Component {
    constructor(props){
        super(props)
        this.ref=firebase.firestore().collection('comandas');
        this.unsubscribe = null;
            this.state = {
                orders: []
            }
    }
        getData = (querySnapshot) => {
            const orders = [];
            querySnapshot.forEach(function(doc){
                orders.push({
                    key : doc.id,
                    name :doc.data().orders,
                })
            })
            this.setState({orders})
    }

     componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.getData);
            }
    render () {
        const allOrders = this.state.orders.map((item, i) => {
          return (
            <section key={i} className="ticketList">
              {/* <h5 key={i} className="itemsNameOrders">
                {item.key}
              </h5> */}
              {item.name.map((item2, i) => {
                return (
                  <p key={i} className=" btn foodCards">
                    {item2.name}
                  </p>
                );
              })}
            </section>
          );
        });
        
        return (
             <section className='ordersContainer'>
                    {allOrders}
            </section>
        )
    }
}
