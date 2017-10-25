import React, { Component } from 'react';
import $ from 'jquery';

// eslint-disable-next-line react/prefer-stateless-function
class AddFriends extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.makeFriends.bind(this);
    this.state = {
      user: {
        name: null,
        id: null,
        token: null,
      },
      name: '',
    };
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  makeFriends() {
    event.preventDefault();
    $.ajax({
      url: `https://react-is-awesome-backend.herokuapp.com/users/${this.state.user.id}/friends`,
      method: 'POST',
      data: {
        friend: {
          name: `${this.state.name}`,
        },
        token: `${this.state.user.token}\\n`,
      },
    }).done((response) => {
      console.log(response);
    });
  }

  render() {
    return (
      <div className="loginBox">
        <form onSubmit={this.makeFriends}>
          <input onChange={this.handleChange} type="text" name="name" value={this.state.name} placeholder="username" />
          <input type="submit" value="Add Friend" />
        </form>
      </div>
    );
  }
}

export default AddFriends;
