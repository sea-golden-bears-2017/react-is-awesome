import React , { Component } from 'react';
import './App.css';
import Book from './book'
import $ from 'jquery'

class BookList extends Component {
  constructor(){
    super();
    this.state = {
      allBooks: null,
    };
  }

  componentWillMount() {
    let bookList = null;
    $.ajax({
      url: 'http://localhost:3000/books/',
      method: 'GET',
      crossDomain: true,
      xhrFields: { withCredentials: true }
    }).done((response) => {
       bookList = (
        response.map((book) => {
          return (
            <Book bookInfo={book} key={book.id}/>
          )
        })
      );
      this.setState({
        allBooks: bookList,
      })
    });
  }

  render() {
    return (
      <div>
        <h1>Here's All The Books We Got. . . </h1>
        {this.state.allBooks}
      </div>

    )
  }
}

export default BookList;
