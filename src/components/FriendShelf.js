import React, { Component } from 'react';
import $ from 'jquery';
import Friend from './Friend'

class FriendShelf extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
    }
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
  render() {

    return(
      <div className="friendshelf-container">
        <h1>Friend-Os</h1>
        <ul>
          {this.state.friends.map((friend) => <Friend key={this.state.friends.indexOf(friend)} name={friend.name}/>)}
        </ul>
      </div>
    )
  };

}

export default FriendShelf;
