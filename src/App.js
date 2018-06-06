import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
// Get the navbar
  constructor() {
    super();
    this.state = {
      stickNav: false,
      threshhold: Number.POSITIVE_INFINITY
    };
  }

  componentDidMount(){
    window.addEventListener("scroll", this.handleWindowScroll);
  }
  componentWillUnmount(){
    window.removeEventListener("scroll", this.handleWindowScroll);
  }

  handleWindowScroll = (e) => {
    if(!this.navBar){
      return;
    }

    const pageYOffset = window.pageYOffset;

    if (pageYOffset > 0 ){
      this.setState({stickNav: true})
      console.log(pageYOffset);
    }
    else{
      this.setState({stickNav: false})
    }
  }

  getNavBarStyle(){
    return this.state.stickNav ? 'App-cardSticky' : 'App-card';

  }
  setNameStyle(){
    return this.state.stickNav ?  'nameSticky' : 'name' ;
  }

  setSlogenStyle(){
    return this.state.stickNav ? 'slogenSticky' : 'slogen'; 
  }
  setContactButtonStyle(){
    return this.state.stickNav ? 'getInTouchSticky' : 'getInTouch';
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
          <span className={this.setSlogenStyle()}>//Research //Innovate //Create</span>
          <button className={this.setContactButtonStyle()}>GET IN TOUCH</button>
        </div>

        <p className="App-intro">  
        </p>
      </div>
    );
  }
}

export default App;
