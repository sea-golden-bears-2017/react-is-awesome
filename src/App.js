import React, { Component } from 'react';
import './App.css';

import BookItem from './Book'

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div>
      <BookItem />
      </div>
    );
  }
}

export default App;
