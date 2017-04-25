import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';

class BookList extends Component {

// {this.state.books.map(book => <p>{book.title}</p> )}
//
// {/* {sortedBooks.map(book => <p>{book.title}</p> )} */}
//
// var sortedBooks = this.state.books.sort(function(a,b) {
//   return a.title > b.title;
// });
//
// }
render() {
  return (
  <div>{this.props.foundBooks.map(book => <p>{book.title}</p> )}</div>
  )
  }
}

export default BookList;
