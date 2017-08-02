import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from './Header';
import './App.css';

import Home from './Home';
import Static from './Static';

class App extends Component {
  constructor () {
    super();
    this.state = {
      history: createHistory()
    };
  }

  componentWillMount () {
    this.state.history.listen((location, action) => {
      console.log('location', location);
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Router history={this.state.history}>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/help" component={Static}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
