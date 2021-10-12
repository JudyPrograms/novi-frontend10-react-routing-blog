import React from 'react';
import {Link} from 'react-router-dom';


function NavBar() {
    return (

        <nav className="navbar">
            <Link to="/">
                <span>HOME</span>
            </Link>
            <Link to="/login">
                <span>LOGIN</span>
            </Link>
            <Link to="/overview">
                <span>OVERVIEW</span>
            </Link>
            <Link to="/post">
                <span>POST</span>
            </Link>
        </nav>

    );
}

export default NavBar;