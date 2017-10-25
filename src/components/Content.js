import React, { Component } from 'react';
import LoginBox from './LoginBox'
import ActivityLog from './ActivityLog'
import AddFriends from './AddFriends'

class Content extends Component {

  render() {
    if (this.props.page === 'loginbox') {
      return (
        <div className="container">
          <LoginBox login={this.props.login} />
        </div>
      );
    } else if (this.props.page === 'addfriends'){
      return (
        <div className="container">
          <AddFriends onAddFriend={this.props.onMakeFriends}/>
        </div>
      );
    } else {
      return (
        <div className="container">
          <ActivityLog />
        </div>
      );
    }
  }
}

export default Content;
