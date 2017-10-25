import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Book extends Component {

  render() {
    return (
      <li>{this.props.title} by {this.props.author} </li>
    );
  }
}

export default Book;
