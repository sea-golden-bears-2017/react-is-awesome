import React, { Component } from 'react';

import './App.css';
import NavBar from './NavBar'
import BookList from './BookList'
import Book from './Book'

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(){
    super();
    this.updateToBookMode = this.updateToBookMode.bind(this);
    this.updateToHome = this.updateToHome.bind(this);
    this.state = {
      mode: 'bookListMode',
      book: null,
    };
  }

  updateToHome() {
    this.setState({
      mode: 'bookListMode',
      book: null,
    })
  };

  updateToBookMode(mode, book) {
    this.setState({
      mode: mode,
      book: book,
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar updateToHome={this.updateToHome} />
        <div className="App-header">
          <h1>MyShelf</h1>
        </div>
        {
          (this.state.mode === 'bookListMode') ?  <BookList updateToBookMode={this.updateToBookMode} /> : <Book book={this.state.book} mode={'bookShow'}/>
        }
      </div>
    );
  }
}

export default App;
