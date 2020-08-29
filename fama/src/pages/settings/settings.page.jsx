import React from 'react';
import './settings.styles.css';

export const SettingsPage = props => (
    <div className='settings-page'>
        <div className='settings-container'>
            <button className='settings-item'>
                Payment Information
            </button>
            <button className='settings-item'>
                Logout
            </button>
            <button className='settings-item'>
                My Subscriptions
            </button>
            
        </div>
    </div>
);