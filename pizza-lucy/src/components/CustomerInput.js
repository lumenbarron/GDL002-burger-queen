import React from 'react';
import {Lucy} from './List'

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
                <section className="input-group"> 
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
                            className="btn btn-outline-secondary buttonsInicio" 
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

// export class CustomerInput extends React.Component {
//     constructor () {
//         super();
//         this.state = {
//             name: null
//         };
//         this.handleInput = this.handleInput.bind(this);
//         //this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleInput (e) {
//         const {value } = e.currentTarget;
//         this.setState({
//             name : value
//         }, () => console.log(this.state)
//         )
//     }

//     // handleSubmit (e) {
//     //     e.preventDefault();
//     //     console.log('enviando');
        
//     // }

//     printName = () => {
//         const name = this.state.name;
//         console.log('esta imprimiendo' + name);
        
//     }
//     render () {
//         return (
//             <section className="input-group"> 
                
//                 <input type="text" 
//                 onSubmit = ""
//                 onChange={this.handleInput}
//                 name={this.handleInput} 
//                 className="form-control inputCostumer"
//                  placeholder="Nombre del cliente" />
              
//                 <section className="input-group-append">

//                     <button type="submit" onClick={this.printName} className="btn btn-outline-secondary buttonsInicio" type="button" id="button-addon2">Enviar</button>
               
//                 </section>

//             </section>
//         )
//     }
// }