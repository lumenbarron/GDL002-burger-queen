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
        
        console.log('jalando la data');

            const orders = [];
            querySnapshot.forEach(function(doc){
                console.log(doc.id, doc.data())
               //const {doc} = doc.data()
                orders.push({
                    key : doc.id,
                    doc,
                    name :doc.data().orders[0].name,
                    price :doc.data().orders[0].price,
                })
                console.log(orders)
            })
            this.setState({orders})
            console.log(this.state.orders)
            console.log(this.state.ordersNew);
            
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
    const allOrders = this.state.orders.map((item, i) => {
        return (
              <button 
              className = " btn foodCards" 
              key = {i}    
              name ={item.name} 
              value={item.price} 
              onClick={this.print}>
               {item.name} ${item.price}
              </button>
        );
      });
        return (
             <section className="ordersDisplay">
                <h1>Comandas</h1>
                
                <section>
                <button onClick={this.getData}>data</button>
                </section>
                <section>
                    {allOrders}
                </section>
            </section>
        )
    }
}

// export class Orders extends React.Component {
//     constructor(){
//         super ();
//         this.state ={
//             email:"",
//             fullname: ""
//         };
//     }

//     updateInput = e => {
//         this.setState({
//             [e.target.name]:e.target.value
//         });
//     }

//     addUser = e => {
//         e.preventDefault();
//         const db = firebase.firestore();
//         db.settings({
//             timestampsInSnapshots :true
//         });
//         const userRef = db.collection('users').add({
//             fullname:this.state.fullname,
//             email: this.state.email
//         });
//         this.setState({
//             fullname: "",
//             email : ""
//         })
//     }
//     render () {
//         return (
//             <section className="ordersDisplay">
//             <h1>Comandas</h1>
//             <form onSubmit={this.addUser}>
//           <input
//             type="text"
//             name="fullname"
//             placeholder="Full name"
//             onChange={this.updateInput}
//             value={this.state.fullname}
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Full name"
//             onChange={this.updateInput}
//             value={this.state.email}
//           />
//           <button type="submit">Submit</button>
//         </form>
//            </section>
//         )
//     }
// }