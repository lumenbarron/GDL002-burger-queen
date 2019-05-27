import React from "react";
import {ButtonBackHome} from './ButtonBackHome';
import {ButtonMenus} from './ButtonMenus'
import "../styles/menus.css";


export class NavOrders extends React.Component {
    render () {
        return (
            <section className="navOrdersButton">
            <ButtonBackHome  />
            <ButtonMenus  />
            <h1>Comandas</h1>
            </section>
        
        )
    }
}