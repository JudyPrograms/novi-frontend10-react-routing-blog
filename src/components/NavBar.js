import React from 'react';
import {NavLink} from 'react-router-dom';


function NavBar() {
    return (

        <nav className="navbar">
            <NavLink to="/" exact activeClassName="active-link">
                <span>HOME</span>
            </NavLink>
            <NavLink to="/login" activeClassName="active-link">
                <span>LOGIN</span>
            </NavLink>
            <NavLink to="/overview" activeClassName="active-link">
                <span>OVERVIEW</span>
            </NavLink>
            <NavLink to="/post/1" activeClassName="active-link">
                <span>POST</span>
            </NavLink>
        </nav>

    );
}

export default NavBar;