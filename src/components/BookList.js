import React, { Component } from 'react';
import Header from './Header';
import $ from 'jquery';



class BookList extends Component {
  constructor() {
    super();
    this.state = {
      bookData: [],
    }
  }
  componentDidMount() {
      $.ajax({
        url: 'https://react-is-awesome-backend.herokuapp.com/books/',
        method: 'GET'
      }).done((response) => {
        this.setState({
          bookData: response,
        })
      })
  }

  render() {
    return(
      <div>
        <div className="subHeader">
          <Header content="All Books" />
        </div>
          <div>
            {this.state.bookData.map((book) => {
              return (
              <ul>
                <li>Title- {book.title}</li>
                <li>Author- {book.author}</li>
                <li>Genre- {book.genre}</li>
              </ul>
              );
            })}
          </div>
        </div>
    );
  }
}

export default BookList;
