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
    this.state = {
      bookList: [],
      friendList: [],
    }
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: `https://react-is-awesome-backend.herokuapp.com/users/${this.props.user_id}/friends`,
      data: {token: this.props.token}
    }).done((response) => {
      this.setState({
        friendList: response
      })
    })
  }

  render(){
    let books = []
    let friends = []
    if (this.state.bookList.length > 0) {
      books = this.state.bookList.map(createBook);
    } else {
      books = ["You don't have any books...yet."];
    }
    if (this.state.friendList.length > 0) {
      friends = this.state.friendList.map(createFriend);
    } else {
      friends = ["You don't have any friends!"];
    }

    return(
      <div className="section-container">
        <Section key="bookshelf" header="Bookshelf">{books}</Section>
        <Section key="friends" header="Friends">{friends}</Section>
      </div>
    )}
}

export default UserPage;
