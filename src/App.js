import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TimesFive from './TimesFive';
import NumberGetter from './NumberGetter';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {

  constructor() {
    super();
    this.state = {
      baseNumber: 0,
    };

    this.updateNumber = this.updateNumber.bind(this);
  }

  updateNumber(num) {
    this.setState({
      baseNumber: num,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <TimesFive baseNum={this.state.baseNumber} />
        <NumberGetter onNewNumber={this.updateNumber} />
      </div>
    );
  }
}

export default App;
