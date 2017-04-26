import React, { Component } from 'react';

class Book extends Component {
  handleClick() {
    console.log("ALERT: HI!")
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
