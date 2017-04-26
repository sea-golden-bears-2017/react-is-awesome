import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';

class Results extends Component {

}

class Friend extends Component {
  render() {
    return(
      <li><a href=""></a></li>
    )
  }
}

class FriendList extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    }
  }
  componentWillMount() {
    $.ajax({
      url: 'http://localhost:3000/users/161/books',
      crossDomain: true,
      xhrFields: { withCredentials: true },
    }).done((response) => {
      console.log(response);
      debugger;
    })
  }
  render() {
    return(
    <p>{this.state.list}</p>
    )
  }
}

class Nerdmeter extends Component {
  render() {
    return (
      <div id="nerdmeter">
        <div id="friend-list">
          <FriendList userId={this.props.userId} />
          <p>Hi, you're logged in</p>
        </div>
        <div id="results">
        </div>
      </div>
    )
  }
}

export default Nerdmeter;
