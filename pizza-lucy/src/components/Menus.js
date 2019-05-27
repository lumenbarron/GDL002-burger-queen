import React from "react";
import {ButtonBreakfast} from './ButtonBreakfast'
import {ButtonLunch} from './ButtonLunch';
import {ButtonBackHome} from './ButtonBackHome';
import {ButtonOrders} from './ButtonOrders'
import "../styles/menus.css";


export class Menus extends React.Component {
    render () {
        return (
        <main className="menus">
            <section className="container">
            <ButtonBackHome  />
            <ButtonOrders  />
            <section id="buttonsFood">
                <ButtonBreakfast />
                <ButtonLunch />
            </section>
            </section>
        </main>
        )
    }
}
