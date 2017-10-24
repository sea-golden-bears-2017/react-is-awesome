import React, { Component } from 'react';
import Book from './Book';

// eslint-disable-next-line react/prefer-stateless-function
class Section extends Component {

  render() {
    // const title = this.props.books[0].title
    // const author = this.props.books[0].author
    return (
      <div>
        {this.props.books.map((book) => <Book title={book.title} author={book.author}/>
        )}
      </div>
    );
  }
}
export default Section;
