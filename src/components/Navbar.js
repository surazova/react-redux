import React from 'react'
import { Link, NavLink } from 'react-router-dom' //Changes a href to link to. Link tags prevent the default action of sending a request to the server, makes the app smoother and quicker
                                                //NavLink gives you an active tag when that link is clicked 
const Navbar = () => {
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

export default Navbar;