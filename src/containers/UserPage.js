import React, {Component} from 'react';
import Book from '../components/Book';
import Friend from '../components/Friend';
import $ from 'jquery';
import Section from '../components/Section';

const createBook = ({title, author, id}) => {
  return <Book key={id} title={title} author={author} />
}

const createFriend = ({name, id}) => {
  return <Friend key={id} name={name} />
}

// eslint-disable-next-line react/prefer-stateless-function
class UserPage extends Component {
  constructor() {
    super();
  }

  render(){
    const books = this.props.books.map(createBook);
    const friends = this.props.friends.map(createFriend);
    return(
      <div className="section-container">
        <Section key="bookshelf" header="Bookshelf">{books}</Section>
        <Section key="friends" header="Friends">{friends}</Section>
      </div>
    )}
}

export default UserPage;
