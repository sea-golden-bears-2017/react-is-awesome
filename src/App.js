import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import Nerdmeter from './Nerdmeter'

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: 'login',
      userId: '',
    };
  }
  loggedIn(id) {
    this.setState({ mode: 'logged', userId: id });
    console.log(this.state)
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Nerdmeter</h1>
        </div>
        <div id="content">
          {(this.state.mode === 'login') ? <Login onNewSession={(k) => this.loggedIn(k)} /> : <Nerdmeter userId={this.state.userId} />}
        </div>
      </div>
    );
  }
}

export default App;
