import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from './components/NavBar'
import './App.css';
import BookIndex from './components/books/BooksIndex'

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="header">
          <NavBar />
        </div>
        <div className="mainContent">
          <BookIndex />
        </div>
      </div>
    );
  }
}

export default App;
