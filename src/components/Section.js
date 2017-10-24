import React, { Component } from 'react';
import Book from './Book';
// eslint-disable-next-line react/prefer-stateless-function
const createBook = ({title, author, id}) => {
  return <Book key={id} title={title} author={author} />
}

class Section extends Component {
  render() {
    return (
    <div>
      <h2>Bookshelf</h2>
      {this.props.books.map(createBook)}
    </div>);
  }
}
export default Section;
