import React from 'react';
import './login.styles.css';
import logo from '../../resources/logo.png';

export const LoginPage = props => (
    <div className='login-page'>
        <div className='login-page-container'>
            <img className='logo' src={logo} alt='logo'></img>
            <input className = 'username' type='text' placeholder='Enter Your Username'></input>
            <input className='password' type='password' placeholder='Enter Your Password'></input>
            <p className='reset-text'><b>Reset Your Password</b></p>
            <button className='login-button' onClick={props.updatePageToFeed}><b>Login</b></button>
        </div>
    </div>
);