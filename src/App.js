import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar'
import BookList from './BookList'
import Book from './Book'

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="App-header">
          <h1>MyShelf</h1>
        </div>
        <BookList />
        <Book />
      </div>
    );
  }
}

export default App;
