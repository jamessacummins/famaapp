import React from 'react';
import './App.css';
import {LoginPage} from './pages/login/login.page';
import {FeedPage} from './pages/feed/feed.page';
import {SettingsPage} from './pages/settings/settings.page';
import {JournalistPage} from './pages/journalist/journalist.page';
import {SearchPage} from './pages/search/search.page';
import {Navbar} from './components/navbar/navbar.component';
import {ArticlePage} from './pages/article/article.page';



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      page: 0,
      currentArticle: 0,
      articles: [
        [
          "CORONARECESSION",
          "We're edging towards a change in Economic Management",
          "We must be in a recession because I’m getting a lot more letters from readers telling me they’ve figured out how to fix the economy in a way the economists haven’t been smart enough to discover.",
          "https://specials-images.forbesimg.com/imageserve/1211364644/960x0.jpg?fit=scale",
          [
            "We must be in a recession because I’m getting a lot more letters from readers telling me they’ve figured out how to fix the economy in a way the economists haven’t been smart enough to discover. Their solutions can be weird and wonderful, but a lot of them boil down to a simple proposition: if the economy’s in recession and unemployment’s high because people aren’t spending enough money, why doesn’t the government just print a lot of money and spend it itself?",
            
            "But here’s the scoop: the idea that, rather than borrowing to fund their budget deficits – thus incurring big debts and interest bills – governments should just create the money they need has been anathema to economists for the past 40 years, but this may be changing. There is a growing debate among economists, between the proponents of what they call “modern monetary theory” and more conventional economists and econocrats over whether governments should just create the money they need.",
            
            "The defenders of the conventional wisdom have had to concede a lot of ground. Whereas a decade ago MMT was lightly dismissed as a crackpot idea, as this radical idea has gained more attention its opponents have had to admit it would be perfectly possible to do. They just think it would be a really bad thing to do. Trick is, the “unconventional policy” of “quantitative easing” – where the central bank buys second-hand government bonds and other securities and pays for them merely by crediting the seller’s bank account – is quite similar to what the radicals are seeking.",
            
            "All the major advanced economies – the US, the Eurozone, Britain and Japan - began doing this in big licks in the aftermath of the global financial crisis in 2008, once their official interest rates were so close to zero that they could be pushed no lower. And now, once this coronacession had prompted our Reserve Bank to drop our official rate to its “effective lower bound” of 0.25 per cent in March, it too has resorted to quantitative easing, promising to buy as many second-hand bonds as necessary to keep the interest rate on three-year government bonds no higher than 0.25 per cent.",
            
            "So, how exactly would what the Reserve is already doing be very different to what the MMT advocates say it should be doing?",
            
            "The greatest proponent of MMT is an Australian, Professor Bill Mitchell, from my alma mater, the University of Newcastle. Internationally, its highest profile salesperson is Professor Stephanie Kelton, of Stony Brook University in New York, author of the big-selling The Deficit Myth.",
            
            "Our leading commentator on the debate is Dr Stephen Grenville, a former deputy governor of the Reserve. And our most vocal opponent of MMT is present Reserve governor Dr Philip Lowe.",
            
            "Those opponents are right to say there’s nothing new about “modern” monetary policy. In the days before the loss of faith in simple Keynesianism, it was common for governments to fund their budgets partly by selling bonds to the Reserve Bank, rather than to the public.",
            
            "So the fatwah on governments “printing money” dates back only as far as Milton Friedman and his monetarists’ semi-successful attack on Keynesian orthodoxy in the late 1970s, when all the developed economies had a big problem with high inflation. Friedman argued that inflation was “always and everywhere a monetary phenomenon” which governments could control by limiting the supply of money. Governments eventually realised that the quantity of money was “demand-determined” and that setting targets for growth in the money supply didn’t work. They switched to using the manipulation of interest rates to target the inflation rate.",
            
            "As sensible economists always knew, it was never true that creating money always leads to greater inflation. It does so only when the demand for “real resources” – land, labour and physical capital – exceeds the supply of real resources. Only then do you have “too much money chasing too few goods”.", 
            
            "This has been confirmed by the failure of all the money created by quantitative easing since the global financial crisis to cause much, if any inflation, contrary to the predictions of the world’s few remaining monetarists.",
            
            "The opponents are also right to say, quoting Friedman’s most famous aphorism, that there’s no such thing as a free lunch and it’s a delusion to imagine MMT offers one.",
            
            "As Lowe argued vigorously at his appearance before the Parliament’s economics committee earlier this month, in reply to questions from Greens leader Adam Bandt, it may seem that by creating money rather than borrowing it you’re avoiding a lot of debt and interest payments but, in reality, all you’re doing is delaying and hiding the bill to the government and its taxpayers.",
            
            "It’s also a delusion (as the leading proponents of MMT acknowledge) that governments would be free to create (or “print”, to use a misleading metaphor) as much money as they needed, without restraint. The restraint is the same one it always was: the limited supply of real resources.",
            
            "While ever the demand for real resources – the things we use to produce goods and services – is falling short of the supply of those resources, creating money should lead to increased demand for them (provided you do it more effectively than the big central banks did it after the financial crisis).",
            
            "But once demand was growing faster than the supply of real resources, any further money you created would simply cause inflation. This is what’s really worrying the opponents of MMT (and me). If you let the politicians off the leash to spend as much as they liked up to a point, how would you ever get them to stop once that point was reached?",
            
            "While ever all we’re doing is quantitative easing, the independent central banks do the deciding, not the politicians. Which brings us to Lowe’s “advanced negotiating position”: why risk letting the pollies start creating money when the government can borrow from the public at interest rates that are pathetically low. And Lowe’s promising to keep them low for as long as necessary."
          ],
          "Ross Gittins",
          "12:04pm 24th of August 2020"
        ],
        [
          "FUN IN THE SUN PANDEMIC?",
          "WHY NOT?",
          "Anyone who lives or works in greater Syd,sed to refrain from visiting aged care facilities for 14 days, with the state expected to record double-figure increases in COVID-19 cases in coming days.",
          "https://specials-images.forbesimg.com/imageserve/1211364644/960x0.jpg?fit=scale"
        ]
      ]
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
  updatePageToArticle = () => {
    this.setState({page:5})
  }
  
 
  render(){
    let pageDisplayed;
    
    if(this.state.page === 0){
      pageDisplayed = <LoginPage updatePageToFeed={this.updatePageToFeed}/>
    } else if(this.state.page === 1) {
      pageDisplayed = [<FeedPage articles={this.state.articles} updatePageToArticle={this.updatePageToArticle}/>, <Navbar updatePageToSearch={this.updatePageToSearch} updatePageToFeed={this.updatePageToFeed} updatePageToSettings={this.updatePageToSettings}/>]
    } else if (this.state.page === 2){
    pageDisplayed = [<SettingsPage/>, <Navbar updatePageToSearch={this.updatePageToSearch} updatePageToFeed={this.updatePageToFeed} updatePageToSettings={this.updatePageToSettings}/> ]
    } else if (this.state.page === 3){
      pageDisplayed = [<JournalistPage/>, <Navbar updatePageToSearch={this.updatePageToSearch} updatePageToFeed={this.updatePageToFeed} updatePageToSettings={this.updatePageToSettings}/>]
    } else if (this.state.page === 4){
    pageDisplayed = [<SearchPage/>, <Navbar updatePageToSearch={this.updatePageToSearch} updatePageToFeed={this.updatePageToFeed} updatePageToSettings={this.updatePageToSettings}/>]
    } else if (this.state.page === 5){
      pageDisplayed = [<ArticlePage articles={this.state.articles}/>, <Navbar updatePageToSearch={this.updatePageToSearch} updatePageToFeed={this.updatePageToFeed} updatePageToSettings={this.updatePageToSettings}/>]
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
