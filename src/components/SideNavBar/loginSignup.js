import React from 'react';
import LoginForm from '../Login/LogIn';
import Signup from '../Login/Signup';
function loginSignup(props) {
    return (
        <div>
            <LoginForm/>
            <Signup/>
        </div>
    );
}

export default loginSignup;