import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h2>{this.props.title}</h2>
        <ul className="nav">
          <li onClick={this.props.navClick} id="login">Login</li>
        </ul>
      </div>
    );
  }
}

export default Header;
