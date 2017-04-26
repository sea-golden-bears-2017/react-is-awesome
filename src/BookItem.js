import React, { Component } from 'react';
import $ from 'jquery';
import SkyLight from 'react-skylight';

class BookItem extends Component {

  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    const typeName = this.props.ownsBook ? 'delete' : 'patch';
    $.ajax({
      url: `http://localhost:3000/users/1/books/${this.props.book.id}`,
      type: typeName,
      crossDomain: true,
      xhrFields: { withCredentials: true},
    }).done((response) => console.log(response))
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
