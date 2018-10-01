import React, { Component } from 'react';

class Ninjas extends Component{
    render(){
        //Without destructuring method:
        //console.log(this.props); //takes the props we put in from the parent, app.js 
        //        return(
        //    <div className="ninja">
        //    <div>Name: {this.props.name}</div> 
        //    <div>Age: {this.props.age}</div>
        //    <div>Belt: {this.props.belt}</div>
        //    </div>
        //)
        //    }
        //  }
        //export default Ninjas
        
        //destructuring method: 
        const {name, age, belt} = this.props;
        return(
            <div className="ninja">
            <div>Name: {name}</div> 
            <div>Age: {age}</div>
            <div>Belt: {belt}</div>
            </div>
        )
    }
}

export default Ninjas