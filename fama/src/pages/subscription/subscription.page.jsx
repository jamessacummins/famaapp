import React from 'react';
import './subscription.styles.css';
import Ross from '../../resources/ross.jpg';

export const SubscriptionPage = () => (
    <div className='sub-container'>
        <div className='backdrop-container'></div>
        <div className='ross-container'></div>
        <div className='content-container'>
            <h1>Ross Gittins</h1>
            <br></br>
            <h2 className='titler'>Australian Economic & Financial Analyst</h2>
            <br></br>
            <div className='subscription-block'>
                <p className='box-header'>Gitite</p>
                <p><b>$3</b> <br></br>per month</p>
                <br></br>
                <p>Gitite's get unlimited access to all of Ross' content </p>
                <br></br>
                <button>
                    Subscribe
                </button>
            </div>
        </div>

    </div>
);