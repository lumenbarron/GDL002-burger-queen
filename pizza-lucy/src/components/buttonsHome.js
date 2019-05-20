import React from 'react';
import {Link} from 'react-router-dom';

export class Buttons extends React.Component {
    render () {
        return (
        <header className="App-header">
            <section className='container'>
                <section className='row'>
                    <section className ='col-md-2'></section>
                    <section className ='col-md-8 buttonsContent'>
                           <Link to='/waiter' className="btn btn-success buttonsIntro" > Meseros </Link> 
                           <Link to='/kitchen' className="btn btn-danger buttonsIntro">Cocina</Link>
                    </section>
                    <section className ='col-md-2'></section>
                </section>
            </section>
        </header>
        )
    }
}