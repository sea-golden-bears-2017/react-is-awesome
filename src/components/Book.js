import React, { Component } from 'react';
import $ from 'jquery';
import '../board.css';


// eslint-disable-next-line react/prefer-stateless-function

class Book extends Component {
  constructor() {
    super()
    this.bookClicked = this.bookClicked.bind(this);
  }

  bookClicked() {
    this.props.readBook(this.props.book)
  }

  render() {
    return (
      <li>
        {this.props.book.title} By: {this.props.book.author}
        <button onClick={this.bookClicked}>I've Read This Book</button>
      </li>
    );
  }
}

export default Book;
