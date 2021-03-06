import React from 'react';
import './feed.styles.css';
import {Feed} from '../../components/feed/feed.component';


export const FeedPage = (props) => (
    <div className='feed-page'>
        
        <Feed 
            className='feed'
            articles={props.articles}
            updatePageToArticle={props.updatePageToArticle}
        />
        {console.log(props)}
    </div>
);