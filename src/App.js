import React, { Component } from 'react';
import Header from './components/Header';
import logo from './logo.svg';
import './App.css';
import './Header.css';

// eslint-disable-next-line react/prefer-stateless-function


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="header">
          <Header content="Welcome to the Miggsbrary" />
        </div>
        <div className="subHeader">
          <Header content="Check Out These Books!" />
        </div>
      </div>
    );
  }
}

export default App;
