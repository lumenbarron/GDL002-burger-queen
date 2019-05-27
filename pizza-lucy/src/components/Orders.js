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
                //console.log(doc.id, doc.data())
               //const {doc} = doc.data()
                orders.push({
                    key : doc.id,
                    //doc,
                    //name :doc.data().orders[0].name,
                    name :doc.data().orders,
                    //price :doc.data().orders[0].price,
                })
               // console.log(orders)
            })
            this.setState({orders})
            //console.log(this.state.orders)
            
    }

     componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.getData);
            }
           
    render () {
        //console.log(this.state.orders)
        const allOrders = this.state.orders.map((item, i) => {
          return (
            <section key={i} className="ticketList">
              <h5 key={i} className="itemsNameOrders">
                {item.key}
              </h5>
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
