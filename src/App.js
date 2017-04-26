import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import BookList from './BookList';
import SortBy from './SortBy';
import FilterBy from './FilterBy';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      sortBooks: "title",
    };

    this.setSorter = this.setSorter.bind(this);
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

  setSorter(sorter) {
    this.setState({
      sortBooks: sorter,
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Library</h1>
          <h2>all books sorted by {this.state.sortBooks}</h2>
          <SortBy sortBooks={this.setSorter}/>

        </div>
        <BookList foundBooks={this.state.books} sortThing={this.state.sortBooks}/>
      </div>
    );
  }
}

export default App;
