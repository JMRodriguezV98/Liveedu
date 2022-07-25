import React from 'react';
import { DivLoadImage } from '../styles/StylesGeneral';

const RegisUser = () => {

    const handleClick = (e) => {
        const name = document.getElementById( 'name' ).value;
        const email = document.getElementById( 'email' ).value;
        const number = document.getElementById( 'number' ).value;
        const pass = document.getElementById( 'pass' ).value;

        const user = {
            nombre: name,
            email: email,
            number: number,
            pass: pass
        }

        if( name !== '' && email !== '' && number !== '' && pass !== ''){
            localStorage.setItem( 'key', JSON.stringify(user) );
            window.location.href = '/Home';
        }
    }

    return (
        <DivLoadImage>
            <div>
                <h2>Welcome back</h2>
                <p>Sign in to an existing account using your phone number</p>
                <div style={_styleDivs.divInputs}>
                    <input id='name' type="text" placeholder='Name'/>
                    <input id='email' type="email" placeholder='Email'/>
                    <input id='number' type="number" placeholder='ingresa numero de celular'/>
                    <input id='pass' type="password" placeholder='Password'/>
                </div>
                <button onClick={handleClick}>Create</button>
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

export default RegisUser;
