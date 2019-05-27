import React from 'react';
import {Link} from 'react-router-dom';

export class ButtonBackHome extends React.Component {
    render () {
        return (
            <Link to='/' className="btn buttonsInicio"  id= "buttonBackHome">Inicio</Link>
        )
    }
}