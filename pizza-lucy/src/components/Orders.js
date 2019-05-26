import React from 'react';
import '../styles/orders.css';
import firebase from "./firebaseFirestore";

export class Orders extends React.Component {
    constructor(props){
        super(props)
        this.ref=firebase.firestore().collection('comandas');
        this.unsubscribe = null;
            this.state = {
                //loading : true,
                orders: []
            }
           // this.getData = this.getData.bind(this);
    }

    // getData = () => {
        
    //     console.log('jalando la data');

    //     const db = firebase.firestore()
    //     db.collection('comandas').get()
    //     .then(function (querySnapshot){
    //         const ordersNew = [];
    //         querySnapshot.forEach(function(doc){
    //             console.log(doc.id, doc.data())
    //            // const {orde} = doc.data()
    //             ordersNew.push({
    //                 key : doc.id,
    //                 doc,
    //                 name :doc.data().orders,
    //             })
    //             console.log(ordersNew)
    //         })
    //         this.setState({ordersNew})
    //     }).catch (function(error) {
    //         console.log('algo salio mal', error);
            
    //     })
        
    // }

        getData = (querySnapshot) => {
        
        //console.log('jalando la data');

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

    // componentDidMount() {
    //     this.getData()
    // }
           
     componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.getData);
            }
    
    // componentWillUnmount() {
    //             this.unsubscribe();
    //         }
           
    render () {
        console.log(this.state.orders)
        //const allOrders = this.state.orders.map((item) => item.name)
        // const forEachOrder = allOrders.map((doc, i) => doc.name)
        const allOrders = this.state.orders.map((item) => {
             return (
<section>
    {item.name.forEach(item2 => {
        return <p>{item2} </p>
    })}
</section>
             )
             
             //item.name.forEach(item2 => {
        //         return (console.log(item2))
        //     })
         }) 
             // <button 
            //   className = " btn foodCards" 
            //   key = {i}    
            //   name ={item.name} 
            //   value={item.price} 
             // onClick={this.print}>
             //  {doc}
              //</button>
        //);
        console.log(allOrders)
        //console.log(forEachOrder)
    
     
        return (
             <section className="ordersDisplay">
                <h1>Comandas</h1>
                
                <section>
                {/* <button onClick={this.getData}>data</button> */}
                </section>
                <section>
                    {allOrders}
                </section>
            </section>
        )
    }
}
