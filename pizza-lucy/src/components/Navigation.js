import React from 'react'

export class Navigation extends React.Component {
    render () {
        return (
    <nav className="nav nav-pills flex-column flex-sm-row">
      <a className="flex-sm-fill text-sm-center nav-link " href="1.2">
      Inicio
      {this.props.title}
      </a>
      <a className="flex-sm-fill text-sm-center nav-link active" href="1.1">Desayuno</a>
      <a className="flex-sm-fill text-sm-center nav-link disabled" href="1"  aria-disabled="true">Almuerzo</a>
    </nav>
    )
    }
}

//export default Navigation