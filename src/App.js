import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header content={"All Books"} />
      </div>
    );
  }
}

export default App;
