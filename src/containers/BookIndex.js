import React, {Component} from 'react';
import Book from '../components/Book';
import Section from '../components/Section';

const createBook = ({title, author, id}) => {
  return <Book button="true" key={id} title={title} author={author} />
}

// eslint-disable-next-line react/prefer-stateless-function
class BookIndex extends Component {
  constructor() {
    super();
  }

  render(){
    const books = this.props.books.map(createBook);
    return(
      <div className="section-container">
        <Section
          key="books"
          button="true"
          header="Books">{books}</Section>
      </div>
    )}
}

export default BookIndex;
