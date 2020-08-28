import React from 'react';
import './feed.styles.css';
import Corona from '../../resources/corona.jpeg';

export default class Feed extends React.Component {
    render(){
        return(
            <div className='feed'>
                <div className='feed-box'>
                <div className='article-tag-wrapper'>
                    <p className='article-tag'>CORONAVIRUS PANDEMIC</p>
                </div>
                <h3 className='article-header'>Sydneysiders urged to avoid aged care homes as coronavirus cases rises</h3>
                
                <img className='article-image' alt='article image' src={Corona}></img>
                <p className='article-preview-content'>Anyone who lives or works in greater Sydney or the Central Coast has been strongly 
                advised to refrain from visiting aged care facilities for 14 days, with the state expected to 
                record double-figure increases in COVID-19 cases in coming days.</p>   
                <div className='article-divider'></div>         
            </div>
            <div className='feed-box'>
                <div className='article-tag-wrapper'>
                    <p className='article-tag'>CORONAVIRUS PANDEMIC</p>
                </div>
                <h3 className='article-header'>Sydneysiders urged to avoid aged care homes as coronavirus cases rises</h3>
                
                <img className='article-image' alt='article image' src={Corona}></img>
                <p className='article-preview-content'>Anyone who lives or works in greater Sydney or the Central Coast has been strongly 
                advised to refrain from visiting aged care facilities for 14 days, with the state expected to 
                record double-figure increases in COVID-19 cases in coming days.</p>   
                <div className='article-divider'></div>         
            </div>
            <div className='feed-box'>
                <div className='article-tag-wrapper'>
                    <p className='article-tag'>CORONAVIRUS PANDEMIC</p>
                </div>
                <h3 className='article-header'>Sydneysiders urged to avoid aged care homes as coronavirus cases rises</h3>
                
                <img className='article-image' alt='article image' src={Corona}></img>
                <p className='article-preview-content'>Anyone who lives or works in greater Sydney or the Central Coast has been strongly 
                advised to refrain from visiting aged care facilities for 14 days, with the state expected to 
                record double-figure increases in COVID-19 cases in coming days.</p>   
                <div className='article-divider'></div>         
            </div>
            <div className='feed-box'>
                <div className='article-tag-wrapper'>
                    <p className='article-tag'>CORONAVIRUS PANDEMIC</p>
                </div>
                <h3 className='article-header'>Sydneysiders urged to avoid aged care homes as coronavirus cases rises</h3>
                
                <img className='article-image' alt='article image' src={Corona}></img>
                <p className='article-preview-content'>Anyone who lives or works in greater Sydney or the Central Coast has been strongly 
                advised to refrain from visiting aged care facilities for 14 days, with the state expected to 
                record double-figure increases in COVID-19 cases in coming days.</p>   
                <div className='article-divider'></div>         
            </div>
            </div>
            

            
        );
    }
};

