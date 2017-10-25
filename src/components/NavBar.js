import React, { Component } from 'react';
import $ from 'jquery';

class NavBar extends Component {
  render(){
    return(
      <div className="App-header">
        <h2>Booknook!!</h2>
        <ul>
          <li id='home' onClick={this.props.contentLoad}>Home</li>
          <li id='profile' onClick={this.props.contentLoad}>Profile</li>
          <li id='about' onClick={this.props.contentLoad}>About</li>
        </ul>
      </div>
    )
  }
}
export default NavBar;
