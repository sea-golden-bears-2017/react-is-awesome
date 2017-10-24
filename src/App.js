import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookIndex from './components/BooksIndex'

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render(){
    return (
      <div className="App">
        <BookIndex />
      </div>
    );
  }
}

export default App;
