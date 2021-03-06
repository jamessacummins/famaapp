import React from 'react';

import './feed.styles.css';

import {FeedBox} from '../feed-box/feed-box.component';

export const Feed = props => (
    <div className='feed'>
        <FeedBox 
            article={props.articles[0]}
            updatePageToArticle={props.updatePageToArticle}
            
        />
       <FeedBox 
            article={props.articles[1]}
            updatePageToArticle={props.updatePageToArticle}
        />
        <FeedBox 
            article={props.articles[2]}
            updatePageToArticle={props.updatePageToArticle}
        />
        <FeedBox 
            article={props.articles[3]}
            updatePageToArticle={props.updatePageToArticle}
        />
        <FeedBox 
            article={props.articles[4]}
            updatePageToArticle={props.updatePageToArticle}
        />
        <FeedBox 
            article={props.articles[5]}
            updatePageToArticle={props.updatePageToArticle}
        />
    </div>
);
