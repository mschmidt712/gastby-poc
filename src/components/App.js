import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the Gatsby POC</h2>
        </div>
        <p className="App-intro">
          This is our React Application!
        </p>
        <p className="App-intro">
          You can place any content here that you please. To navigate to our static documentation pages, click the Help button below.
        </p>
        <a className="help" href="/gatsby/public/index.html">Help</a>
      </div>
    );
  }
}

export default App;
