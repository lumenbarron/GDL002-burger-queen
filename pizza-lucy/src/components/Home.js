import React from 'react';
import '../styles/Buttons.css';
import {Buttons} from './ButtonsHome'

export class Home extends React.Component {
    render () {
        return (
            <header className="App-header">
            <Buttons/>
          </header>
        )
    }
}