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
  render() {
    return(
    <p></p>
    )
  }
}

class Nerdmeter extends Component {
  render() {
    return (
      <div id="nerdmeter">
        <div id="friend-list">
          <FriendList />
        </div>
        <div id="results">
        </div>
      </div>
    )
  }
}

export default Nerdmeter;
