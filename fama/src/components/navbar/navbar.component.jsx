import logo from '../../resources/logo.png';
import gear from '../../resources/gear.png';
import search from '../../resources/search.png';
import React from 'react';
import './navbar.styles.css';

export const Navbar = props => (
    <div className='navbar'>
        <div className='item-box' onClick={props.updatePageToSearch}>
            <img className='navbar-search' alt='search icon' src={search}></img>
        </div> 
        <div className='item-box'onClick={props.updatePageToFeed} >
            <img className='navbar-logo' alt='logo' src={logo}></img>
        </div>
        <div className='item-box'onClick={props.updatePageToSettings}>
            <img className='navbar-gear' alt='settings icon' src={gear}></img>
        </div>
    </div>
);