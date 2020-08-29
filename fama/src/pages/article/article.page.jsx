import React from 'react';
import './article.styles.css';
import Ross from '../../resources/ross.jpg';

export const ArticlePage = props => (
    <div className='article-page'>
        <div className='article-container'>
        <h1 className='tagger'>{props.articles[0][0]}</h1>
        <h1 className='header-article'>{props.articles[0][1]}</h1>
        <img alt="ross gittins" src={Ross} className="rossy-boy"></img>
        <h1 className='author-article'>{props.articles[0][5]}</h1>
        <h1 className='date-article'>{props.articles[0][6]}</h1>
        <p className='para'>{props.articles[0][4][0]}</p>
       
        <p className='para'>{props.articles[0][4][1]}</p>
        <p className='para'>{props.articles[0][4][2]}</p>
        
        <p className='para'>{props.articles[0][4][3]}</p>
        <p className='para'>{props.articles[0][4][4]}</p>
        
        <p className='para'>{props.articles[0][4][5]}</p>
        <p className='para'>{props.articles[0][4][6]}</p>
        
        <p className='para'>{props.articles[0][4][7]}</p>
        <p className='para'>{props.articles[0][4][8]}</p>
        <p className='para'>{props.articles[0][4][9]}</p>
        
        <p className='para'>{props.articles[0][4][10]}</p>
        <p className='para'>{props.articles[0][4][11]}</p>
        
        <p className='para'>{props.articles[0][4][12]}</p>
        </div>
    </div>
);