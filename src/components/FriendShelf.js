import React, { Component } from 'react';
import Friend from './Friend'

class FriendShelf extends Component {
  render() {
    const friends =[{name: 'john'},
                    {name: 'libby'}]
    return(
      <div>
        <h1>Friend-Os</h1>
        <ul>
          {friends.map((friend) => <Friend name={friend.name}/>)}
        </ul>
      </div>
    )
  };

}

export default FriendShelf;
