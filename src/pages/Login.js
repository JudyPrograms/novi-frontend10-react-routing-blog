import React from 'react';
import {useHistory} from 'react-router-dom';
import Button from '../components/Button';

function Login() {

    const history = useHistory()

    return (
        <div className="login-container">
            <Button handleClick={() => history.push('/overview')}>
                LOGIN
            </Button>
        <p>
            This button sends you to 'Overview'
        </p>
        </div>
    );
}

export default Login;