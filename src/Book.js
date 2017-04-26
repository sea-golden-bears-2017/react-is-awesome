import React, { Component } from 'react';
import $ from 'jquery'
import BookItem from './BookItem'

class Book extends Component {
  constructor() {
    super();
    this.deleteBook = this.deleteBook.bind(this);
    this.popUpBook = this.popUpBook.bind(this);
  }

  deleteBook() {
    $.ajax({
      url: `http://localhost:3000/books/${this.props.book.id}/delete`,
      // data: {session["user_id"]: 161}
      type: 'DELETE',
      crossDomain: true,
      xhrFields: { withCredentials: true},
    })
  }

  popUpBook() {
    this.props.showBook(this.props.book)
  }

  render() {
    return (
      <div>
        <button onClick={this.popUpBook} className='bookLink'>
          {`${this.props.book.title} by ${this.props.book.author}`}
        </button>
        <button onClick={this.deleteBook} className='delete_btn'>
          Delete Book
        </button>
      </div>
    )
  }
}

export default Book;
