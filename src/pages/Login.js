import React from 'react';
import {useHistory} from 'react-router-dom';
import Button from '../components/Button';

function Login({setIsAuth}) {

    const history = useHistory()

    function login() {
        setIsAuth(true)
        history.push('/blogposts')
    }

    return (
        <div className="login-container">
            <Button handleClick={login}>
                LOGIN
            </Button>
        <p>
            This button sends you to 'Overview'
        </p>
        </div>
    );
}

export default Login;