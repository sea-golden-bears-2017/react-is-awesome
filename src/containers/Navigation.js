import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Navigation extends Component {
  render() {
    return (
      <nav className="navbar">
        <div>
          <ul className="inline-center">
            <li onClick={this.props.onClick} id='home'><a href="#">Home</a></li>
            <li onClick={this.props.onClick} id='catalogue'><a href="#">Catalogue</a></li>
            <li onClick={this.props.onClick} id='profile'><a href="#">Profile</a></li>
            <li onClick={this.props.onClick} id='logout'><a href="#">Logout</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
