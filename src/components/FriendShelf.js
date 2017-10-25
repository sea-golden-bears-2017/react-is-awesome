import React, { Component } from 'react';
import $ from 'jquery';
import Friend from './Friend';
import AddFriend from './AddFriend';

class FriendShelf extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      allUsers: [],
    }
    this.addFriends = this.addFriends.bind(this);
  }

  componentWillMount() {
    $.ajax({
      method: "GET",
      url: `https://react-is-awesome-backend.herokuapp.com/users/${this.props.user.user_id}/friends`,
      data: {token: this.props.user.token}
    }).done((response) => {
      this.setState({ friends: response })
    })
  }

  addFriends(e) {
    e.preventDefault();
    $.ajax({
      method: 'GET',
      url: "https://react-is-awesome-backend.herokuapp.com/users/"
    }).done((response) => {
      this.setState({ allUsers: response });
    });
  }

  render() {
    return(
      <div className="friendshelf-container">
        <h1>Friend-Os</h1>
        <ul>
          {this.state.friends.map((friend) => <Friend name={friend.name}/>)}
        </ul>
        <ul>
          {this.state.allUsers.map(user => <AddFriend name={user.name} />)}
        </ul>
        <button onClick={this.addFriends}>Add Friends!</button>
      </div>
    )
  };

}

export default FriendShelf;
