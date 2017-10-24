import React, { Component } from 'react';
import $ from 'jquery'

// eslint-disable-next-line react/prefer-stateless-function
class Book extends Component {
  createBook(book) {
    return `${book.title} by ${book.author}`
  }

  render() {
    return (
      <li>{createBook(book)}</li>
    );
  }
}

export default Book;
