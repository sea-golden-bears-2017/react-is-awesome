import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import BookList from './BookList';
import SortBy from './SortBy';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    this.getBooks();
  }
  getBooks() {
    $.ajax({
      url: '//localhost:3000/books',
      method: 'get',
      crossDomain: true,
      xhrFields: { withCredentials: true },
    }).done((response) => {
      this.setState({
        books: response,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Library</h1>
          <h2>all books sorted by x</h2>
          <SortBy />
        </div>
        <BookList foundBooks={this.state.books} />
      </div>
    );
  }
}

export default App;
