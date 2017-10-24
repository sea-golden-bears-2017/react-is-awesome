import React, {Component} from 'react';


class NavBar extends Component {
  render(){
    return(
      <header>
        <h1>Its a Library!!</h1>
        <nav>
          <ul>
            <li>Profile</li>
            <li>Library</li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default NavBar;
