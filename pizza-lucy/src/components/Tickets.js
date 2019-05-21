import React from 'react';

export class Tickets extends React.Component {
    render () {
        console.log(this.props.order)
        const tickets = this.props.order.map((item, i ) => {
            return (
                <h5 key={i} className='itemsName'>
                    {item.name} / ${item.price}
                </h5>
            )
        })
        return (
            <section className ="ticketList" > 
               { tickets } 
            </section>
        )
    }
}