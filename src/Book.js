import React, { Component } from 'react';
import $ from 'jquery';
import BookItem from './BookItem';
import SkyLight from 'react-skylight';

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
    const id = this.props.book.id
    const buttonName = 'Add Book';
    return (
      <div>
        <SkyLight hideOnOverLayClicked ref="simpleDialog" title="Hello">
          <BookItem book={this.props.book} />
        </SkyLight>
        <button onClick={() => this.refs.simpleDialog.show()} className='bookLink'>
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
