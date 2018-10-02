import React, { Component } from 'react';

//changing into a functional component, using an if statement deleted render()
const Ninjas = ({ninjas}) => { 
        const ninjaList = ninjas.map(ninja => { 
            //Adding a conditonal statement 
            if (ninja.age > 20) {
            return(
            <div className="ninja" key={ninja.id}> 
            <div>Name: {ninja.name}</div> 
            <div>Age: {ninja.age}</div>
            <div>Belt: {ninja.belt}</div>
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
        //     //Another way to add a conditional statement 
        // ninjas.map(ninja => {
        //  return ninja.age > 20 ? (
        //     <div className="ninja" key={ninja.id}> 
        //     <div>Name: {ninja.name}</div> 
        //     <div>Age: {ninja.age}</div>
        //     <div>Belt: {ninja.belt}</div>
        //     </div>   
        // ) : null;   //first () true second () false 
        // })
            
        // }
        // </div>
        // );
        

export default Ninjas