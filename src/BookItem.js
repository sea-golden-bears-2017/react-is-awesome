import React, { Component } from 'react';

class BookItem extends Component {

  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    console.log("hello");
  }

  render() {
    const buttonName = this.props.ownsBook ? 'Remove Book' : 'Add Book';
    return (
      <div className="book-pop">
        <div className="Header"><h1>{this.props.book.title}</h1></div>
        <div className="Content">
          <h2>Author: {this.props.book.author}</h2>
          <ul>
            <li>Publisher: {this.props.book.publisher}</li>
            <li>Genre: {this.props.book.genre}</li>
          </ul>
        </div>
        <div className="user-add">
          <span><button onClick={this.clickHandler}>{buttonName}</button></span>
        </div>
      </div>
    )
  }
}

export default BookItem;
