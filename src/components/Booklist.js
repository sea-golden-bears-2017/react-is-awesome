import React, { Component } from 'react';
import $ from 'jquery';
import '../board.css';
import Book from './Book';


// eslint-disable-next-line react/prefer-stateless-function

class Booklist extends Component {
  constructor() {
    super();
  }


  createBook(book) {
    return <Book book={book} readBook={this.props.readBook} />;
  }

  render() {
    return (
      <ul className="BookList">
        {this.props.books.map((book) => this.createBook(book))};
      </ul>
    );
  }
}

export default Booklist;
