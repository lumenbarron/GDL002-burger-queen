import React from "react";
import {ButtonBreakfast} from './ButtonBreakfast'
import {ButtonLunch} from './ButtonLunch';
import {ButtonBackHome} from './ButtonBackHome';
import {ButtonOrders} from './ButtonOrders'
// import {Navigation} from './Navigation';
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

// export class BreakfastMenu extends React.Component {
//     render () {
//         return (
//         <main className="breakfastMenu">
//             <section className="container">
//             <ButtonHome  className='navigation' />
//             <ButtonOrders   className='navigation' />

//                     <section className="row">
//                         <section className='foodCards col-md-5'>
//                         <ButtonBreakfast className='showCards' />
//                         <ButtonLunch className='showCards' />
//                         </section>
//                         <section className='col-md-1'> </section>
//                         <section className='ordersMenu col-md-6'>
//                         <CustomerInput />
//                         </section>
//                     </section>
//             </section>
//         </main>
//         )
//     }
// }

