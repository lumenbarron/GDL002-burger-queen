import React from "react";
import {BreakfastCards} from "./BreakfastCards";
import {LunchCards} from "./LaunchCards";
import {Navigation} from './Navigation';
import "../styles/menus.css";

export class BreakfastMenu extends React.Component {
    render () {
        return (
        <main className="breakfastMenu">
            <section className="container">
                <Navigation />
                    <section className="row">
                        <section className='foodCards col-md-5'>
                            <BreakfastCards />
                            <LunchCards />
                        </section>
                        <section className='col-md-1'> </section>
                        <section className='ordersMenu col-md-6'>
                        <BreakfastCards />
                        </section>
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