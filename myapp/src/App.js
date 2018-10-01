import React, { Component } from 'react';
import Ninjas from './Ninjas';  //Imported Ninjas in order to nest

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> My first React App </h1>
        <p> Welcome! </p>
        <Ninjas /> 
      </div>
    );
  }
}

export default App;
