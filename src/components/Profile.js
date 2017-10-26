import React, { Component } from 'react';
import BookShelf from './BookShelf';
import FriendShelf from './FriendShelf';

class Profile extends Component {
  render(){
    return(
      <div>
        <h1>{this.props.user.username}</h1>
        <BookShelf user={this.props.user} library={false}/>
        <FriendShelf user={this.props.user}/>
      </div>
    );
  }
}

export default Profile;
