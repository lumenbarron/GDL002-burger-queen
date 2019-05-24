import React from 'react';
import '../styles/orders.css';
import firebase from "./firebaseFirestore";

export class Orders extends React.Component {
    constructor(props){
        super(props)
            this.ref=firebase.firestore().collection('comandas');
            this.unsubscribe = null;
            this.state = {
                orders : []
            }
    }
    onCollectionUpdate = (querySnapshot) => {
        const orders = [];
               querySnapshot.forEach((doc) => {
                   const { title, price } = doc.data();
                   orders.push({
                       key : doc.id,
                       doc,
                       title,
                       price
                   });
               });
               this.setState({orders});
             }
           
     componentDidMount() {
         this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
             }
           
    render () {
        const ordersPrint = this.state.orders.map((item, i) => {
            return (
                <section
                className ="btn fooCards"
                key = {i}>
                {item.title} ${item.price}
                </section>
            )
        })
        return (
             <section className="ordersDisplay">
                <h1>Comandas</h1>
                <section>
                    {ordersPrint}
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