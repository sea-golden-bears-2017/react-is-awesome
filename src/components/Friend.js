import React, { Component } from 'react';

class Friend extends Component {
  render(){
    return(
      <li>{this.props.name}</li>
    )
  };

}

export default Friend;
