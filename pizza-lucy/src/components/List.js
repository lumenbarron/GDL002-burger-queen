import React , { Component } from "react";

export class Lucy extends Component {
  constructor (props) {
    super (props);

    this.state = {
      newItem: '',
      list : []
    }
  }
updateInput (key, value) {
  //update react state
  this.setState({
    [key]:value
  })
}
  addItem() {
//create item with unique id
const newItem = {
id : 1 + Math.random(),
value : this.state.newItem.slice()
};

//copy a current list of items
const list = [...this.state.list];

//adding new item to list
list.push(newItem);

//update state with new list and reet newItem input
this.setState({
  list,
  newItem:''
});
}

deleteItem(id){
  //copy current list of items
  const list = [...this.state.list];

  //filter out item being deleted
  const updatedList = list.filter(item => item.id !== id);

  this.setState({list:updatedList});
}
  render () {
    return (
      <section className="App"> 
      <h1>Holi</h1>
      <section> 
       <input
       type ='text'
       placeholder='Type item here'
       value ={this.state.newItem}
       onChange = { e => this.updateInput('newItem', e.target.value)}

        />
        <button onClick={ () => this.addItem()}>
        Add
        </button>
        <br />
        <ul> 
        {this.state.list.map (item => {
          return (
            <p key={item.id}>
            {item.value}
            <button
            onClick = { () => this.deleteItem(item.id)}
            > X </button>
            </p>
          )
        })}
        </ul>
      </section>
      </section> 
    )
  }
}

export default Lucy