import React from 'react';

export class Buttons extends React.Component {
    render () {
        return (
            <section className='container'>
                <section className='row'>
                    <section className ='col-md-2'></section>
                    <section className ='col-md-8 buttonsContent'>
                        <button className="btn btn-success buttonsIntro">
                            Meseros
                        </button>
                        <button className="btn btn-danger buttonsIntro">
                            Cocina
                        </button>
                    </section>
                    <section className ='col-md-2'></section>
                </section>
            </section>
        )
    }
}