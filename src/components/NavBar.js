import React from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import Button from "./Button";


function NavBar({isAuth, setIsAuth}) {

    const history = useHistory()

    function logout() {
        setIsAuth(false)
        history.push('/')
    }

    return (

        <nav className="navbar">
            <NavLink to="/" exact activeClassName="active-link">
                <span>HOME</span>
            </NavLink>
            {isAuth &&
            <>
                <NavLink to="/blogposts" activeClassName="active-link">
                    <span>BLOGPOSTS</span>
                </NavLink>
                <Button size={"small-button"} handleClick={logout}>
                    LOGOUT
                </Button>
            </>
            }
            {!isAuth &&
            <NavLink to="/login" activeClassName="active-link">
                <span>LOGIN</span>
            </NavLink>
            }
        </nav>

    );
}

export default NavBar;