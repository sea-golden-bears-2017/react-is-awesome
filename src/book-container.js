import React , { Component } from 'react';
import './App.css';
import BookList from './book-list'

class BookContainer extends Component {
  render() {
    return (
      <div>
        <BookList />
      </div>
    )
  }
}

export default BookContainer;
