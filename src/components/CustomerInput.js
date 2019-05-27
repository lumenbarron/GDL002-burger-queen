import React from 'react';

export class CustomerInput extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name:'',
            list : []
        };
    }

    updateName ( key, value){
        this.setState ({
            [key]:value
        })
    }

    addName (){
        const name = {
            id: 1 + Math.random(),
            value : this.state.name.slice()
        };

        const list = [...this.state.list]
        list.push(name);

        this.setState({
            list,
            name:''
        });
    }
    
    render () {
        return (
            <section>
                <section className="input-group input-form"> 
                    <input 
                    type="text" 
                    placeholder="Nombre del cliente"
                    value = {this.state.name}
                    onChange={e => this.updateName('name', e.target.value)}
                    className="form-control inputCostumer"
                    />
                        <section className="input-group-append">
                            <button 
                            type="submit" 
                            onClick={() => this.addName()} 
                            className="btn btn-outline-secondary buttonsInicio btn-input" 
                            id="button-addon2">
                            Enviar
                            </button>
                        </section>
            
                </section>
                <section>
                {this.state.list.map( item => {
                    return (
                        <h4 
                        className='itemsOrders'
                        key={item.id} >
                        {item.value}
                        </h4>
                    )
                } )}
                </section>
             </section>
        )
    }
}