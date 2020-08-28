import React from 'react';
import './App.css';
import {LoginPage} from './pages/login/login.page';
import {FeedPage} from './pages/feed/feed.page';
import {SettingsPage} from './pages/settings/settings.page';
import {JournalistPage} from './pages/journalist/journalist.page';
import {SearchPage} from './pages/search/search.page';
import {Navbar} from './components/navbar/navbar.component';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      page: 0
    };
    
  }
  updatePageToFeed = () => {
    this.setState({page:1})
  }
  updatePageToSettings = () => {
    this.setState({page:2})
  }
  updatePageToSearch = () => {
    this.setState({page:4})
  }
  render(){
    let pageDisplayed;
    if(this.state.page === 0){
      pageDisplayed = <LoginPage updatePageToFeed={this.updatePageToFeed}/>
    } else if(this.state.page === 1) {
      pageDisplayed = [<FeedPage/>, <Navbar updatePageToSearch={this.updatePageToSearch} updatePageToFeed={this.updatePageToFeed} updatePageToSettings={this.updatePageToSettings}/>]
    } else if (this.state.page === 2){
    pageDisplayed = [<SettingsPage/>, <Navbar updatePageToSearch={this.updatePageToSearch} updatePageToFeed={this.updatePageToFeed} updatePageToSettings={this.updatePageToSettings}/> ]
    } else if (this.state.page === 3){
      pageDisplayed = [<JournalistPage/>, <Navbar updatePageToSearch={this.updatePageToSearch} updatePageToFeed={this.updatePageToFeed} updatePageToSettings={this.updatePageToSettings}/>]
    } else if (this.state.page === 4){
    pageDisplayed = [<SearchPage/>, <Navbar updatePageToSearch={this.updatePageToSearch} updatePageToFeed={this.updatePageToFeed} updatePageToSettings={this.updatePageToSettings}/>]
    }
    
    return (
      <div className="App">
        {
          pageDisplayed
        }
      </div>
    );
  }
}

export default App;
