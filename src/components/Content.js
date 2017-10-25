import React, { Component } from 'react';
import LoginBox from './LoginBox'

class Content extends Component {
  constructor() {
    super();
    this.state = {
      content: 'loginbox',
    };
  }
  render() {
    return (
      <div className="container">
        <LoginBox login={this.props.login} />
      </div>
    );
  }
}

export default Content;
