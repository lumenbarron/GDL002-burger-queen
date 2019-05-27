import React from 'react';

export class Tickets extends React.Component {
    render () {
        const tickets = this.props.order.map((item, i ) => {
            return (
                <h5 
                key={i}
                name ={item.title} 
                value={item.price} 
                className='itemsName'>
                {item.name} / ${item.price}
                <button 
                className='deletItems'
                onClick = {(e) => this.props.delete(item)} >X</button>
                </h5>
            )
        })
        const totalTickets = this.props.order.reduce((acc, list) => acc + list.price, 0);
        return (
            <section>
                <section className="ticketList" >
                    {tickets}
                    <h4 className='itemsOrders'>
                     Total : {totalTickets}
                </h4>
                </section>
                <button 
                className="updateButton"
                onChange={this.props.onChange} 
                onClick={this.props.sendOrders} >
                    Finalizar pedido
                </button>
            </section>
        )
    }
}