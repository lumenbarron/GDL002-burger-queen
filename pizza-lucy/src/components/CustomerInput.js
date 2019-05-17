import React from 'react';

export class CustomerInput extends React.Component {
    constructor () {
        super();
        this.state = {
            name: null
        };
        this.handleInput = this.handleInput.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput (e) {
        const {value } = e.currentTarget;
        this.setState({
            name : value
        }, () => console.log(this.state)
        )
    }

    // handleSubmit (e) {
    //     e.preventDefault();
    //     console.log('enviando');
        
    // }

    printName = () => {
        const name = this.state.name;
        console.log('esta imprimiendo' + name);
        
    }
    render () {
        return (
            <section className="input-group"> 
                
                <input type="text" 
                onSubmit = ""
                onChange={this.handleInput}
                name={this.handleInput} 
                className="form-control inputCostumer"
                 placeholder="Nombre del cliente" />
              
                <section className="input-group-append">

                    <button type="submit" onClick={this.printName} className="btn btn-outline-secondary buttonsInicio" type="button" id="button-addon2">Enviar</button>
               
                </section>

            </section>
        )
    }
}
