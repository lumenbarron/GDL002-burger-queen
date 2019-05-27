import React from 'react';
import '../styles/kitchen.css';
import {NavOrders} from './NavOrders'
import { Orders } from "./Orders";

export class Kitchen extends React.Component {
    render () {
        return (
            <section className="ordersDisplay">
            <NavOrders />
            
            <Orders />
           </section>
        )
    }
}