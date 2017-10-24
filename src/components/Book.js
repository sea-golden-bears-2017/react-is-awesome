import React, { Component } from 'react';
import $ from 'jquery'

// eslint-disable-next-line react/prefer-stateless-function
class Book extends Component {
  constructor() {
    super();
    this.state = {
      bookData: [],
    }
  }

  componentWillMount() {
    $.ajax({
      method: 'GET',
      url: 'https://react-is-awesome-backend.herokuapp.com/books'
    }).done((response) => {
      this.setState({
        bookData: response });
    })
  }

  render() {
    return (
      <div> Book</div>
    );
  }
}

export default Book;
