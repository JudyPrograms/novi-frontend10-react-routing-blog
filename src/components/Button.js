import React from 'react';

function Button({size, handleClick, children}) {
    return (
        <button className={size} onClick={handleClick}>
            {children}
        </button>
    );
}

export default Button;