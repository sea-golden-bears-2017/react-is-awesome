import React, { Component } from 'react';
import Book from './Book';
// eslint-disable-next-line react/prefer-stateless-function
const createBook = ({title, author, id}) => {
  return <Book key={id} title={title} author={author} />
}

class Section extends Component {
  render() {
    return (
    <div class="section">
      <h2>{this.props.header}</h2>
      {this.props.children.map((child) => {
        return <li>{child}</li>
      })}
    </div>);
  }
}
export default Section;
