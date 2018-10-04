import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        content: ''
    }
    //changes
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    
    //submit 
    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state)
        this.props.addTodo(this.state);
        //empties the todo
        this.setState({
            content: ''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo: </label>
                    <input type = "text" onChange= {this.handleChange} value={this.state.content}/> 
                
            </form>
            </div>
        )
    }
}

export default AddTodo