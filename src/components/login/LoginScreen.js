import React from 'react'

export const LoginScreen = ({ history }) => {

    const handleLogin = () => {
        history.push('/');
    };

    return (
        <div>
            <h1>Login</h1>
            <hr></hr>

            <button 
                type="button" class="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>
            
        </div>
    )
}
