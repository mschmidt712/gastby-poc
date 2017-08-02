import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import './App.css';

class Header extends Component {
  render() {
    return (
        <div className="App-header">
          <Link to="/" className="react-link">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <h2>Welcome to the Gatsby POC</h2>
        </div>
    );
  }
}

export default Header;
