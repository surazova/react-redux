import React, { Component } from 'react';
import './Ninjas.css'

//changing into a functional component, using an if statement deleted render()
const Ninjas = ({ninjas, deleteNinja}) => { 
        const ninjaList = ninjas.map(ninja => { 
            //Adding a conditonal statement 
            if (ninja.age > 20) {
                
            //Using arrow function to make sure that onClick doesn't get envoked automatically 
            return(
            <div className="ninja" key={ninja.id}> 
            <div>Name: {ninja.name}</div> 
            <div>Age: {ninja.age}</div>
            <div>Belt: {ninja.belt}</div>
            <button onClick={() => {deleteNinja(ninja.id)}}>Delete Ninja </button> 
            </div>             
                )
            } else {
                return null
            }
        })


        return (
            <div className="ninja-list">
        { ninjaList }
        </div>
        )
}


export default Ninjas



