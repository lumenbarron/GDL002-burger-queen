import React from 'react';
import {Link} from 'react-router-dom';

export class ButtonMenus extends React.Component {
    render () {
        return (
            <Link to='/waiter' className="btn buttonsInicio" id= "buttonOrders"> Menus </Link>
        )
    }
}