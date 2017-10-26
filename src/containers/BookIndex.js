import React, {Component} from 'react';
import Book from '../components/Book';
import Section from '../components/Section';


// eslint-disable-next-line react/prefer-stateless-function
class BookIndex extends Component {
  constructor() {
    super();
    this.clickHandle = this.clickHandle.bind(this)
  }

  createBook({title, author, id}){
    return <Book onClick={(event) => this.clickHandle(event)} button="true" key={id} id={id} title={title} author={author} />
  }

  clickHandle(event) {
    console.log(event)
  }

  render(){
    const books = this.props.books.map(this.createBook.bind(this));
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
