import React from 'react';
import {Link} from 'react-router-dom';

export class ButtonsHome extends React.Component {
    render () {
        return (
        <header className="App-header">
            <section className='container'>
                <section className='row'>
                    <section className ='col-md-2'></section>
                    <section className ='col-md-8 buttonsHomeContent'>
                           <Link to='/waiter' className="btn btn-success buttonsHomeLink" > Meseros </Link> 
                           <Link to='/kitchen' className="btn btn-danger buttonsHomeLink">Cocina</Link>
                    </section>
                    <section className ='col-md-2'></section>
                </section>
            </section>
        </header>
        )
    }
}