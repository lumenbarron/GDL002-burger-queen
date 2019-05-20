import React from "react";
import {Navigation, ButtonLunch, ButtonBreakfast } from './Navigation';
import {CustomerInput} from './CustomerInput';
import "../styles/menus.css";

export class BreakfastMenu extends React.Component {
    render () {
        return (
        <main className="breakfastMenu">
            <section className="container">
            <Navigation />

                    <section className="row">
                        <section className='foodCards col-md-5'>
                        <ButtonBreakfast className='showCards' />
                        <ButtonLunch className='showCards' />
                        </section>
                        <section className='col-md-1'> </section>
                        <section className='ordersMenu col-md-6'>
                        <CustomerInput />
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