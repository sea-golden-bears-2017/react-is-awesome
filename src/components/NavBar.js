import React, { Component } from 'react';

class NavBar extends Component {

  render() {
    return (
      <div className="navBar">
        <button onClick={ (event) => this.props.onIconClick('addfriends')}>Add Friends</button>
        <button onClick={ (event) => this.props.onIconClick('container')}>Activity Log</button>
      </div>
    );
  }
}

export default NavBar;
