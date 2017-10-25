import React, { Component } from 'react';
import $ from 'jquery';

class AddFriend extends Component {
  render() {
    return(
      <pre>
        {this.props.name}  <button>Konnekt</button>
      </pre>
    );
  }
}

export default AddFriend;
