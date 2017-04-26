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
  renderButtons(){
    return (
      this.props.buttons.map((value) => {
        return ([
          <NavBarButton value={value} onClick={() => this.props.onClick(value)} />
        ])
      })
    )
  }
  render() {
    return (
      <div>
        <nav>
          {this.renderButtons()}
        </nav>
      </div>
    );
  }
}

export default NavBar;
