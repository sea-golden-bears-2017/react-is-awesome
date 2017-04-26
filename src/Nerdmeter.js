import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';

class Results extends Component {
  componentWillMount() {
    $.ajax({
      url: `http://localhost:3000/users/${this.props.friendObject.id}/books`,
      crossDomain: true,
      xhrFields: { withCredentials: true },
    }).done((response) => {
      console.log(response);
    });
  }
  render() {
    return(
      <p>Your friend is really nerdy!</p>
    )
  }
}

class Friend extends Component {
  clickHandler(event) {
    event.preventDefault();
    return this.props.onClick(this.props.friendObject);
  }
  render() {
    return(
      <a onClick={(e) => this.clickHandler(e)}>{this.props.friendObject.name}</a>
    )
  }
}

class FriendList extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }
  componentWillMount() {
    $.ajax({
      url: `http://localhost:3000/users/${this.props.userId}/friends`,
      crossDomain: true,
      xhrFields: { withCredentials: true },
    }).done((response) => {
      this.setState({list: response});
    });
  }
  handleClick(f){
    return this.props.onClick(f);
  }
  render() {
    return (
      <div>
        <p>You made it. You really do have friends. And they read!</p>
        <ul>
          {this.state.list.map((friend)=> {return(<li key={friend.id}><Friend friendObject={friend} onClick={(f) => this.handleClick(f) } /></li>)})}
        </ul>
      </div>
      // <Friend />
    );
  }
}

class Nerdmeter extends Component {
  constructor() {
    super();
    this.state = {
      result: null,
    };
  }
  handleClick(e) {
    this.setState({result: e});
  }
  render() {
    return (
      <div id="nerdmeter">
        <div id="friend-list">
          <p>Select a friend and we'll tell you how nerdy they are!</p>
          <FriendList userId={this.props.userId} onClick={(e) => this.handleClick(e)} />
        </div>
        <div id="results">
          {(this.state.result !== null) ? <Results friendObject={this.state.result}  /> : <div></div> }
        </div>
      </div>
    )
  }
}

export default Nerdmeter;
