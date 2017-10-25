import React, { Component } from 'react';
import $ from 'jquery';

// eslint-disable-next-line react/prefer-stateless-function
class BookList extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    console.log('it mounted');
    const url = 'https://react-is-awesome-backend.herokuapp.com/books/1'
    $.ajax({
      url,
      method: 'GET',
      dataType: 'JSON'
    }).done(response => {
      this.setState({'books': response});
    })

  }

  render() {
    return (
      <div className="BookList">
        {this.state.books.author}
      </div>
    );
  }
}

export default BookList;
