import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom' //withRouter imports a higher-order component, supercharges the parameter
                                                //NavLink gives you an active tag when that link is clicked 
const Navbar = () => {
    // console.log(props)
    setTimeout((props) => {   //redirecting to a page using the history. 
      props.history.push('/about')  
    }, 2000)
    return (
        <nav className="nav-wrapper teal accent-3">
            <div className="container"> 
                <a href=".eslint" className="brand-logo">Poketimes</a>
                
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>

                </ul>
            </div>
        </nav>
        )
}

export default withRouter(Navbar)