import React, { Component } from 'react';
import './App.css';
import BookContainer from './BookContainer.js';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div>
        <BookContainer />
      </div>
    );
  }
}

export default App;
