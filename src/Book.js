import React, { Component } from 'react';

class Book extends Component {
  render() {
    return (
      <div>
        <button className='bookLink'>
          {`${this.props.book.title} by ${this.props.book.author}`}
        </button>
        <button className='delete_btn'>
          Delete Book
        </button>
      </div>
    )
  }
}

export default Book;
