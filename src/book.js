import React , { Component } from 'react';
import './App.css';

class Book extends Component {

  render() {
    return (
      <div className="one-book">
        {this.props.bookInfo.title}
      </div>
    )
  }
}

export default Book;
