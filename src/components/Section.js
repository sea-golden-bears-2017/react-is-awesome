import React, { Component } from 'react';
import Book from './Book';

// eslint-disable-next-line react/prefer-stateless-function
class Section extends Component {

  createBook(book) {
    return `${book.title} by ${book.author}`
  }

  books() {
    this.props.books.map((book) => { return this.createBook(book) })
  }

  render() {


    return (
      <div>
        <ul>
          <Book name={book.name} author={book.author}/>
        </ul>
      </div>
    );
  }
}
export default Section;
