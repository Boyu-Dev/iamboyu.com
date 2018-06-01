import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet"/>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <div className="App-card">
            <span className="name">Bo Yu</span>
            <span className="slogen">//Research //Innovate //Create</span>
          
          <button className="getInTouch">GET IN TOUCH</button>
          </div>
        </header>

        <p className="App-intro">
          
        </p>
      </div>
    );
  }
}

export default App;
