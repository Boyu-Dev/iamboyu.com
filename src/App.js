import React, { Component } from 'react';
import './App.css';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';


class App extends Component {
// Get the navbar
  constructor() {
    super();
    this.state = {
      stickNav: false,
      isToggleOn: false,
      atHome: false,
      atAbout: false,
      atWork: false,
      atExp: false,
      renderContact: false,
    };

    this.tabOnClick = this.tabOnClick.bind(this);
    this.getContact = this.getContact.bind(this);
  }

  componentDidMount(){
    window.addEventListener("scroll", this.handleWindowScroll);
  }
  componentWillUnmount(){
    window.removeEventListener("scroll", this.handleWindowScroll);
  }

  //scroll handlers
  handleWindowScroll = (e) => {
    if(!this.navBar){
      return;
    }
    const pageYOffset = window.pageYOffset;
   
    if(pageYOffset < 1){
      this.setState({
        atHome: true,
        atAbout: false,
        atWork: false,
        atExp: false,
        stickNav: false,
      });
    }
    else if (pageYOffset > 0){
      this.setState({stickNav: true});
    }
  }

  tabOnClick(){
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
      stickNav: !prevState.stickNav,
    }));
  }

  getNavBarStyle(){
    return !this.state.stickNav ?  'App-card' : 'App-cardSticky';

  }
  setNameStyle(){
    return !this.state.stickNav ?  'name' : 'nameSticky' ;
  }

  setTabStyle(){
    return !this.state.stickNav ? 'tabSticky tabTaggleOff' : 'tabSticky tabTaggleOn' ; 
  }
  setContactButtonStyle(){
    return !this.state.stickNav ? 'getInTouch' : 'getInTouchSticky';
  }
  setTagline(){
    return !this.state.stickNav ? 'tagline' : 'taglineSticky' ;
  }


  getContact(){
    
    this.setState(prevState => ({
      getContact: !prevState.getContact,
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet"/>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
       

        <div className={this.getNavBarStyle()} ref={ref=>this.navBar=ref}>
          <span className={this.setNameStyle()}>Bo Yu</span>
          <span className={this.setTagline()}>Interactive Software Developer & UX Engineer</span>
          <span className={this.setTabStyle()}>
           <ul>
            <li className="tab" onClick={this.tabOnClick}>
              <div className="shiftLeft">
                <div className="initText">//About</div>
              </div>
              <div className="shiftRight">
                <div className="addtext">Me</div>
              </div>
            </li>
            <li className="tab">
            <div className="shiftLeft">
                <div className="initText">//Work</div>
              </div>
              <div className="shiftRight">
                <div className="addtext">. I Did</div>
              </div>
            </li>
            <li className="tab">
            <div className="shiftLeft exp">
                <div className="initText">//Exp</div>
              </div>
              <div className="shiftRight erience">
                <div className="addtext">--.erience</div>
              </div>
            </li>
           </ul>
           <div></div>
          </span>
          <button className={this.setContactButtonStyle()} onClick={this.getContact}>GET IN TOUCH</button>
            {this.state.getContact ? 
              <ReactCSSTransitionGroup
                transitionName="contactPageAnimation"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}
              >
              <div className="contactPage">
                <div className="closeContactPage" onClick={this.getContact}>X</div>
                <p className="contactTitle">Let's Talk</p>
                <p>New project, opportunities, or even just to get coffee.<br/>I am all down!</p>
                <form className="contactForm">
                  <div>
                    <input type="text" placeholder="Name *"/>
                  </div>
                  <div>
                    <input type="text" placeholder="E-mail *"/>
                  </div>
                  <div>
                    <textarea type="text" placeholder="Message *"/>
                  </div>
                  <div>
                    <button>Send Message</button>
                  </div>
                </form>
              </div>
              </ReactCSSTransitionGroup> : null}
        </div>

        <p className="App-intro">  
        </p>
      </div>
    );
  }
}

export default App;
