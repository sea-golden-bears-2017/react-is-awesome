import React, { Component } from 'react';
import $ from 'jquery';

// eslint-disable-next-line react/prefer-stateless-function
class AddFriends extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: '',
    };
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    return (
      <div className="friendadder">
        <form onSubmit={ (event) => this.props.onAddFriends(this.state.name)}>
          <input onChange={this.handleChange} type="text" name="name" value={this.state.name} placeholder="Friends Name" />
          <input type="submit" value="Add Friend" />
        </form>
      </div>
    );
  }
}

export default AddFriends;
