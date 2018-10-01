import React, { Component } from 'react';

class Ninjas extends Component{
    render(){
        const { ninjas } = this.props;  //Also set a unique key id for key={ninja.id}
        const ninjaList = ninjas.map(ninja => { //cycle through ninjas array, mapping it to a new array, and returning and template for that ninja
            return(
            <div className="ninja" key={ninja.id}> 
            <div>Name: {ninja.name}</div> 
            <div>Age: {ninja.age}</div>
            <div>Belt: {ninja.belt}</div>
            </div>             
                )
        })
        return(
        <div className="ninja-list">
        { ninjaList }
        </div>
        )
    }
}

export default Ninjas