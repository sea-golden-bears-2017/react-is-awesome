import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar'
import BookList from './BookList'

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="App-header">
          <h2>MyShelf</h2>
        </div>
        <BookList />
      </div>
    );
  }
}

export default App;
