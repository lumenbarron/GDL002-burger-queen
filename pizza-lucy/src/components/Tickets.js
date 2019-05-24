import React from 'react';

// export class Tickets extends React.Component {
//     render () {
//         console.log(this.props.order)
//         const tickets = this.props.order.map((item, i ) => {
//             return (
//                 <h5 
//                 key={i}
//                 className='itemsName'>
//                 {item.name} / ${item.price}
//                 <button>X</button>
//                 <button onChange={this.onChange} onChange={this.onChange} >
//                      Subir
//                 </button>
//                 </h5>
//             )
//         })
//         return (
//             <section className ="ticketList" > 
//                { tickets } 
//             </section>
//         )
//     }
// }

// import React from 'react';
 import firebase from './firebaseFirestore';

export class Tickets extends React.Component {
    // constructor(props){
    //     super(props);
       //this.ref=firebase.firestore().collection('orders');
       // console.log(this.state.orders)
    //}

    render () {
        console.log(this.props.order)         
        const tickets = this.props.order.map((item, i ) => {
            return (
                <h5 
                key={i}
                name ={item.title} 
                value={item.price} 
                className='itemsName'>
                {item.name} / ${item.price}
                <button onClick = {(e) => this.props.delete(item)} >X</button>
                </h5>
            )
        })
        return (
            <section> 
            <section className ="ticketList" > 
             { tickets } 
            </section>
            <button onChange={this.props.onChange} onClick={this.props.sendOrders} >update</button>
            </section>
        )
    }
}