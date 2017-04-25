import React, { Component } from 'react';
import './App.css';

class NavBarButton extends Component {
  render() {
    return (
      <button onClick={() => this.props.onClick()}>{this.props.value}</button>
    )
  }
}

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav>
          <NavBarButton value="Register" onClick={() => this.props.onClick("Register")} />
          <NavBarButton value="Login/Logout" onClick={() => this.props.onClick("Login/Logout")} />
          <NavBarButton value="Home" onClick={() => this.props.onClick("Home")} />
        </nav>
      </div>
    );
  }
}

export default NavBar;
