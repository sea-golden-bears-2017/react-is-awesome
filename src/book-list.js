import React , { Component } from 'react';
import './App.css';
import Book from './book'
import $ from 'jquery'

class BookList extends Component {
  getBooks() {
    $.ajax({
      url: 'http://localhost:3000/books/',
      method: 'GET',
      crossDomain: true,
      xhrFields: { withCredentials: true }
    }).done((response) => {
      
    });
  }
  render() {
    this.getBooks()
    return (
      <div>
        <Book />
      </div>

    )
  }
}

export default BookList;
