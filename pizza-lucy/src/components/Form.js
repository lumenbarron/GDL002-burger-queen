import React from 'react'

export class Form extends React.Component {
    constructor () {
        super ();
        this.state = {
            title : '',
            responsible : '',
            description : ''
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput (e) {
        const { value, name} = e.target;
        this.setState({
            [name] : value
        })
        console.log(this.state);
        
    }

    handleSubmit (e) {
        e.preventDefault ();
        this.props.onAddBreakfast(this.state)
        console.log('enviando...');
        
    }
    render () {
        return (
            <div className='card'>
            <form className='card-body' onSubmit={this.handleSubmit}>
             <div className='form-group'>
               <input
               type = 'text'
               name = 'title'
               className = 'form-control'
               placeholder = 'Title'
               onChange = {this.handleInput}
                />
             </div>
             <div className='form-group'>
               <input
               type = 'text'
               name = 'responsible'
               className = 'form-control'
               placeholder = 'Responsible'
               onChange = {this.handleInput}
                />
             </div>
             <div className='form-group'>
               <input
               type = 'text'
               name = 'description'
               className = 'form-control'
               placeholder = 'Description'
               onChange = {this.handleInput}
                />
             </div>
             <button type = 'submit' className = 'btn btn-primary'>
             Enviar
             </button>
            </form>
            </div>
        )
    }
}