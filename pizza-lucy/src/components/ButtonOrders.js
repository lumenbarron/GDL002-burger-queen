import React from 'react';
import {Link} from 'react-router-dom';

export class ButtonOrders extends React.Component {
    render () {
        return (
            <Link to='/orders' className="btn buttonsInicio" id= "buttonComandas"> Comandas </Link>
        )
    }
}