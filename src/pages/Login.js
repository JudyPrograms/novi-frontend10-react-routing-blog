import React from 'react';

function Login() {

    function handleClick() {

    }

    return (
        <div className="login-container">
        <button
            onClick={handleClick}>
            INLOGGEN
        </button>
        <p>
            Deze knop stuurt je naar 'Overview'
        </p>
        </div>
    );
}

export default Login;