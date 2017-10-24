import React, { Component } from 'react';
import house from '../../public/home-outline.jpg'
import bookIcon from '../../public/book-icon.png'
// eslint-disable-next-line react/prefer-stateless-function
class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li id="home"><img id="home" onClick={this.props.onClick} width="70" class="home-icon" src={house} /></li>
          <li id="book"><img id="book" onClick={this.props.onClick} width="45" class="book-icon" src={bookIcon} /></li>
        </ul>
      </nav>
    );
  }
}
export default NavBar;
