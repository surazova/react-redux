import React, { Component } from 'react';
import Todos from './Todos'


//create a prop to pass the array into the component Todos.app
class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'make a todoapp'}
      ]
  }
  //Adding function to delete todos 
  deleteTodo = (id) => {
    //console.log(id);  //shows the id of the todo
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id //if todo is not equal to id, return true, keeps it in the array
      
    });
    this.setState({
      todos: todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
      <h1 className="center blue-text"> Todo's</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>

      </div>
    );
  }
}

export default App;
