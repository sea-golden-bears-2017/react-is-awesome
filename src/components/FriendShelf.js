import React, { Component } from 'react';
import $ from 'jquery';
import Friend from './Friend'

class FriendShelf extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      generalPopulation: false,
    }
  }

  getUserFriends() {
    $.ajax({
      method: "GET",
      url: `https://react-is-awesome-backend.herokuapp.com/users/${this.props.user.user_id}/friends`,
      data: {token: this.props.user.token}
    }).done((response) => {
      console.log(response);
      this.setState({ friends: response, generalPopulation: false })
    });
  }

  getAllFriends() {
    $.ajax({
      method: "GET",
      url: 'https://react-is-awesome-backend.herokuapp.com/users',
      data: {token: this.props.user.token}
    }).done((response) => {
      this.setState({ friends: response, generalPopulation: true })
    })
  }

  addFriend(friend) {
      const url =
      `https://react-is-awesome-backend.herokuapp.com/users/${this.props.user.user_id}/friends`
    $.ajax({
      method: 'POST',
      url,
      data: {friend: friend, token: this.props.user.token}
    }).done((response) => {
      this.getUserFriends()
    })
    }


  componentWillMount() {
    this.getUserFriends();
  }

  showFriend(friend) {
    if (this.state.generalPopulation) {
      return (
        <div>
          <Friend key={this.state.friends.indexOf(friend)} name={friend.name} />
          <button onClick={() => this.addFriend(friend)}>Add Friend!</button>
        </div>
      );
    }
    return (
      <Friend key={this.state.friends.indexOf(friend)} name={friend.name} />
    )
  }

  render() {
    return(
      <div className="friendshelf-container">
        <h1>Friend-Os</h1>
        <ul>
          {this.state.friends.map((friend) => this.showFriend(friend))}
        </ul>
        <button onClick={() => this.getAllFriends()}>Find Friends!</button>
      </div>
    )
  };

}

export default FriendShelf;
