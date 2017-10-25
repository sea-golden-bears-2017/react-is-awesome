import React, { Component } from 'react';
import $ from 'jquery';

class NavBar extends Component {
  render(){
    return(
      <div className="App-header">
        <h2>Booknook!!</h2>  
        <ul>
          <li>Home</li>
          <li>Profile</li>
          <li>About</li>
        </ul>
      </div>
    )
  }
}
export default NavBar;
