import React, {Component} from 'react';


class NavBar extends Component {
  render(){
    return(
      <header>
        <h1>Its a Library!!</h1>
        <nav>
          <ul>
            <li onClick={this.props.pageLoad} id='profile'>Profile</li>
            <li onClick={this.props.pageLoad} id='library'>Library</li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default NavBar;
