import React, { Component } from 'react';

import './App.css';
import NavBar from './NavBar'
import BookList from './BookList'
import Book from './Book'

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(){
    super();
    this.state = {
      mode: 'bookMode'
    };
  }
  render() {
    const book = {"id":1,"title":"Look Homeward, Angel","author":"Luigi Balistreri","publisher":"Hodder Headline","genre":"Mythology","created_at":"2017-04-21T23:12:15.051Z","updated_at":"2017-04-21T23:12:15.051Z"};
    return (
      <div className="App">
        <NavBar />
        <div className="App-header">
          <h1>MyShelf</h1>
        </div>
        {
          (this.state.mode === 'bookMode') ?  <BookList /> : <Book book={book}/>
        }
      </div>
    );
  }
}

export default App;
