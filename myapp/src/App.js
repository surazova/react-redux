import React, { Component } from 'react';
import Ninjas from './Ninjas';  
import AddNinja from './AddNinja'
class App extends Component {
  
    state = {
      ninjas: [
        { name: 'Ryu', age: 30, belt: 'black', id: 1},
        { name: 'Yoshi', age: 20, belt: 'green', id: 2},
        { name: 'Crystal', age: 25, belt: 'pink', id: 3}
        ]
    }
    
    //Creating a new function and prop, so the funciton can be called from AddNinja.js 
    addNinja = (ninja) => {
      //console.log(ninja);
      ninja.id=Math.random(); //gives random id that is unique 
      let ninjas = [...this.state.ninjas, ninja] //spread operator, used to copy the original array, then adding the element to the array so that you are not changing the set state/altering the original. 
      this.setState({
        ninjas: ninjas
      })
    }
    render() {
    return (
      <div className="App">
        <h1> My first React App </h1>
        <p> Welcome! </p>
        <Ninjas ninjas={this.state.ninjas}/> 
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
