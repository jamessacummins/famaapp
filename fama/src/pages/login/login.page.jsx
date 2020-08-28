import React, {Component} from 'react';
import './login.styles.css';
import logo from '../../resources/logo.png';

export const LoginPage = props => (
    <div className='login-page'>
        <div className='login-page-container'>
            <img className='logo' src={logo} alt='logo'></img>
            <div className='break'></div>
            <button className='login-button' onClick={props.updatePageToFeed}><b>Login</b></button>
        </div>
    </div>
);