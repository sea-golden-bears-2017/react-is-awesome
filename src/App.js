import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import Nerdmeter from './Nerdmeter'

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: "login",
     };
  }
  loggedIn(token) {
    this.setState({ mode: token })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Nerdmeter</h1>
        </div>
        <div id="content">
          {(this.state.mode === "login") ? <Login onNewSession={this.loggedIn.bind(this)}/> : <Nerdmeter />}
        </div>
      </div>
    );
  }
}

export default App;
