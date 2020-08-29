import React from 'react';
import './feed-box.styles.css';
import Corona from '../../resources/corona.jpeg';

export const FeedBox = props => (
    <div>
        <div className='feed-box'>
            <div className='article-tag-wrapper'>
            <p className='article-tag'>{props.article[0]}</p>
            </div>
            <h3 className='article-header'>{props.article[1]}</h3>
                
            <img className='article-image' alt='article image' src={Corona}></img>
<p className='article-preview-content'>{props.article[2]}</p>   
            <div className='article-divider'></div>         
        </div>
    </div>
);