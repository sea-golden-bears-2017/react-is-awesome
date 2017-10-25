import React, {Component} from 'react'
import logo from '../../public/book-icon.svg';

class Header extends Component {

  displayName() {
    if (this.props.name === '') {
    return <h2>See what your friends are reading!</h2>
    } else {
    return <h2>Welcome Back, {this.props.name}</h2>
    }
  }

  render() {
    return(
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>BookConnect</h1>
        {this.displayName()}
      </div>
    )
  }

}

export default Header;
