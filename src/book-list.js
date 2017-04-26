import React , { Component } from 'react';
import './App.css';
import Book from './book'
import $ from 'jquery'

class BookList extends Component {
  constructor(){
    super();
    this.state = {
      allBooks: null,
    }
  }
  getBooks() {
    let bookList = null;
    $.ajax({
      url: 'http://localhost:3000/books/',
      method: 'GET',
      crossDomain: true,
      xhrFields: { withCredentials: true }
    }).done((response) => {
      return bookList = (
        response.map((book) => {
          return (
            <Book bookInfo={book} />
          )
        })
      );
    });
    debugger;
  }
  // renderBooks(){
  //
  // }
  render() {

    return (
      <div>
        {this.getBooks()}
      </div>

    )
  }
}

export default BookList;
