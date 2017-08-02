import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Home () {
  return (
    <div className="App">
      <p className="App-intro">
        This is our React Application!
      </p>
      <p className="App-intro">
        You can place any content here that you please. To navigate to our static documentation pages, click the Help button below.
      </p>
      <Link to="/help" className="help">Help</Link>
    </div>
  );
}

export default Home;
