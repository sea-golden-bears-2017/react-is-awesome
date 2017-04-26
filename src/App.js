import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './App.css';
import Login from './Login';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Nerdmeter</h1>
        </div>
        <div id="content">
          <Login />
          {/* <Nerdmeter /> */}
        </div>
      </div>
    );
  }
}

export default App;
