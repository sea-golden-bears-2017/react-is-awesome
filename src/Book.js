import React, { Component } from 'react';

class Book extends Component {
  render() {
    return (
      <div>
        <li>
          <button className='bookLink' id={`${this.props.book.id}`}>
            {`${this.props.book.title} by ${this.props.book.author}`}
          </button>
          <button className='delete_btn' id={`${this.props.book.id}`}>
            Delete Book
          </button>
        </li>
      </div>
    )
  }
}

export default Book;
