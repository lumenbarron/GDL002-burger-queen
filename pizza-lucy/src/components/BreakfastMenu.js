import React from "react";
import {ButtonBreakfast} from './ButtonBreakfast'
import {ButtonLunch} from './ButtonLunch';
import {ButtonHome} from './ButtonHome';
import {ButtonOrders} from './ButtonOrders'
import {Navigation} from './Navigation';
import {CustomerInput} from './CustomerInput';
import "../styles/menus.css";


export class BreakfastMenu extends React.Component {
    render () {
        return (
        <main className="breakfastMenu">
            <section className="container">
            <ButtonHome  />
            <ButtonOrders  />
                        <section id="prueba">
                        <ButtonBreakfast className='showCards' />
                        <ButtonLunch className='showCards' />
                        </section>
                        
                        <CustomerInput />
                        <section className='ordersMenu'>
                        
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

