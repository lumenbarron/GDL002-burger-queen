import React from "react";
import {BreakfastCards} from "./BreakfastCards";
import {LunchCards} from "./LaunchCards";
import {Navigation} from './Navigation';
import "../styles/cards.css";

export class BreakfastMenu extends React.Component {
    render () {
        return (
        <main className="breakfastMenu">
        <Navigation />
            <section className="container">
            <section className='row'>
            <BreakfastCards />
            <LunchCards />
            </section>
            </section>
        </main>
        )
    }
}



// const breakfast = this.state.desayuno
/* <div className='card-footer'>
<button className ='btn btn danger' 
onClick={this.handleDelete.bind(this, i)}>
Borrar
</button>
</div> */