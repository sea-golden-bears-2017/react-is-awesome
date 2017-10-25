import React, { Component } from 'react';
// eslint-disable-next-line react/prefer-stateless-function
class Book extends Component {
  render() {
    return (
      <div>
        {this.props.title} by {this.props.author}
      </div>
    );
  }
}
export default Book;
