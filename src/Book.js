import React, { Component } from 'react';
import $ from 'jquery'

class Book extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    $.ajax({
      url: `http://localhost:3000/books/${this.props.book.id}/delete`,
      // data: {session["user_id"]: 161}
      type: 'DELETE',
      crossDomain: true,
      xhrFields: { withCredentials: true},
    })
  }
  render() {
    return (
      <div>
        <button className='bookLink'>
          {`${this.props.book.title} by ${this.props.book.author}`}
        </button>
        <button onClick={this.handleClick} className='delete_btn'>
          Delete Book
        </button>
      </div>
    )
  }
}

export default Book;
