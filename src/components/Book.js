import React, { Component } from 'react';
import $ from 'jquery'

// eslint-disable-next-line react/prefer-stateless-function
class Book extends Component {

  render() {
    return (
      <h2>{this.props.title} by {this.props.author}</h2>
    );
  }
}

export default Book;
