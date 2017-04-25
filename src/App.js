import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <NavBar />
      <BookContainer />
    );
  }
}

export default App;
