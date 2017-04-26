import React, { Component } from 'react';
import $ from 'jquery';
import './BookList.css';
import Book from './Book'

// eslint-disable-next-line react/prefer-stateless-function
class BookList extends Component {
  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {
      books: [],
    };
  }

  clickHandler(e, book) {
    e.preventDefault();
    this.props.updateToBookMode('bookMode', book)
  }

  componentDidMount() {
    this.makeBookList();
  }
  makeBookList() {
    $.ajax({
        url: '//localhost:3000/books',
        crossDomain: true,
        xhrFields: { withCredentials: true },

      }).done((response) => {
        this.setState({
          books: response,
        });
      });
  }

  render() {
    var leftList = this.state.books.slice(0, this.state.books.length/2);
    var rightList = this.state.books.slice(this.state.books.length/2, this.state.books.length);
    return (
      <div className = "BookList-container">
        <div className = "list-left">
          <ul>{leftList.map((book) => {
            const handler = (e) => {
              this.clickHandler(e, book)
            };
            return (
            <li key={book.id} ><a onClick={handler} href='#'><Book book={book} mode={'bookTitle'} />
            </a></li>) })
          }
          </ul>
        </div>
        <div className = "list-right">
          <ul>{rightList.map((book) => {
            const handler = (e) => {
              this.clickHandler(e, book)
            };
            return (
            <li key={book.id} ><a onClick={handler} href='#'><Book book={book} mode={'bookTitle'}/>
            </a></li> )})}
          </ul>
        </div>
      </div>
    );
  }
}

export default BookList;
