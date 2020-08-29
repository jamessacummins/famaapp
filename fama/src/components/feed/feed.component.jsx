import React from 'react';

import './feed.styles.css';

import {FeedBox} from '../feed-box/feed-box.component';

export const Feed = props => (
    <div className='feed'>
        <FeedBox 
            article={props.articles[0]}
            
        />
       <FeedBox 
            article={props.articles[1]}
        />
        <FeedBox 
            article={props.articles[0]}
        />
        <FeedBox 
            article={props.articles[1]}
        />
        <FeedBox 
            article={props.articles[1]}
        />
    </div>
);
