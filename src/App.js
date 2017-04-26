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
      filterBooks: "",
    };

    this.setSorter = this.setSorter.bind(this);
    this.setFilter = this.setFilter.bind(this);
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

  setFilter(filter) {
    this.setState({
      filterBooks: filter,
    })
  }

  render() {
    {console.log(this.state.filterBooks)}
    return (
      <div className="App">
        <div className="App-header">
          <h1>Library</h1>
          <h2>all books sorted by {this.state.sortBooks}</h2>
          <SortBy sortBooks={this.setSorter}/>
          <FilterBy filterBooks={this.setFilter}/>
        </div>
        <BookList foundBooks={this.state.books} sortThing={this.state.sortBooks}/>
      </div>
    );
  }
}

export default App;
