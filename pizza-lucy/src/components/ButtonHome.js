import React from 'react';
import {Link} from 'react-router-dom';

export class ButtonHome extends React.Component {
    render () {
        return (
            <Link to='/' className="btn buttonsInicio"  id= "buttonInicio">Inicio</Link>
        )
    }
}