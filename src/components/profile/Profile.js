import React, { Component } from 'react';
import Header from '../Header';
import $ from 'jquery';
//we will come back to profile after login
class Profile extends Component {
  componentDidMount(){
    $.ajax({
      method: 'GET',
      url:'https://react-is-awesome-backend.herokuapp.com/users/'
    }).done((response)=>{
      console.log(response);
    })
  }

  render() {
    return (
      <div className="profile">
        <Header>User's Name</Header>
      </div>
    );
  }
}

export default Profile;
