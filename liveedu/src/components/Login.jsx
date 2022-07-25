import React from 'react';
import { DivLoadImage } from '../styles/StylesGeneral';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <DivLoadImage>
            <div>
                <h2>Welcome back</h2>
                <p>Sign in to an existing account using your phone number</p>
                <div style={_styleDivs.divInputs}>
                    <input type="number" placeholder='ingresa numero de celular'/>
                    <input type="password" placeholder='Password'/>
                </div>
                <button>Login</button>
                <p>Don't have account? <Link to="/register">Sign up</Link></p>
            </div>
        </DivLoadImage>
    );
}

const _styleDivs = {
    divInputs: {
        display: 'flex',
        flexDirection: 'column'
    }
}

export default Login;
