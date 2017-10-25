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
    this.konnekt_to = this.konnekt_to.bind(this);
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
      const friendIds = this.state.friends.map(friend => friend.id)
      const notFriends = response.filter(person => !(friendIds).includes(person.id))
      this.setState({ allUsers: notFriends });
    });
  }

  konnekt_to(newUserId){
      $.ajax({
        method: "POST",
        url: `https://react-is-awesome-backend.herokuapp.com/users/${this.props.user.user_id}/friends`,
        data: {token: this.props.user.token, friend: {id: newUserId}}
      }).done(response =>{
        this.setState({friends: response, allUsers: []});
      });
  }
  
  unFreund(id){
      $.ajax({
        method: "DELETE",
        url: `https://react-is-awesome-backend.herokuapp.com/users/${this.props.user.user_id}/friends/${id}`,
        data: {token: this.props.user.token}
      }).done(response =>{
        const notFriends = this.state.friends.filter((friend) => friend.id !== id)
        this.setState({friends: notFriends})
      });
  }

  render() {
    return(
      <div className="friendshelf-container">
        <h1>Friend-Os</h1>
        <ul>
            {this.state.friends.map(friend => {
              return(
                <div>
                  <Friend name={friend.name}/>
                  <button onClick={()=>this.unFreund(friend.id)}>Unfreund</button>
                </div>
            );})}
        </ul>
        <ul>
          {this.state.allUsers.map(user => {
            return(
              <div>
                <AddFriend name={user.name} user_id={user.id} />
                <button onClick={() => this.konnekt_to(user.id)}>Konnekt</button>
              </div>
            );
          })}
        </ul>
        <button onClick={this.addFriends}>Add Friends!</button>
      </div>
    )
  };

}

export default FriendShelf;
