import React, { Component } from 'react';
import './App.css';
import Login from './Login';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor() {
    super();
    this.state = { loggedIn: false };
  }
  isLoggedIn() {
    if(this.state.loggedIn) {
      <Nerdmeter />
    } else {
      <Login />
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Nerdmeter</h1>
        </div>
        <div id="content">
          {if (this.state.loggedIn)}{/* IF NOT LOGGED IN, render Login, if so, render Nerdmeter. Set state in app to control this. */}
          {else}
          <Login />

          {/* <Nerdmeter /> */}
        </div>
      </div>
    );
  }
}

export default App;
