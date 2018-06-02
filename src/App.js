import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
// Get the navbar

  constructor() {
    super();
    this.state = {sticky :true};
    this.isSticky = this.isSticky.bind(this);
  }


  
  isSticky() {
    this.setState({
      blur : !this.state.blur
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet"/>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        </header>
        <div className = {this.state.blur ? 'App-card':'sticky'} onScroll = {this.isSticky}>
          <span className="name">Bo Yu</span>
          <span className="slogen">//Research //Innovate //Create</span>
          <button className="getInTouch">GET IN TOUCH</button>
        </div>
        <p className="App-intro">  
        </p>
      </div>
    );
  }
}

export default App;
