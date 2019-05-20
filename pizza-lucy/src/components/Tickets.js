import React from 'react';

export class Tickets extends React.Component {
    render () {
        console.log(this.props.order)
        const tickets = this.props.order.map((item, i ) => {
            return (
                <h5>
                    {item.name} {item.price}
                </h5>
            )
        })
        return (
            <section className ="ordersMenu" > 
               { tickets } 
            </section>
        )
    }
}