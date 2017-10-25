import React, { Component } from 'react';
import BookShelf from './BookShelf';
import FriendShelf from './FriendShelf';

class Home extends Component {
  render(){
    return(
      <div>
        <h2>Home</h2>
        <BookShelf user={this.props.user} library={true}/>
      </div>
    );
  }
}

export default Home;
