import React , { Component } from 'react';
import './App.css';
import $ from 'jquery';

class RegistrationForm extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      password: null,
    };
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  sendRegistration(e) {
    e.preventDefault();
    console.log("Registered!");
    fetch('URL', {
      method: 'POST',
      data: 'DATA'
    }).then(function(response) {
      console.log(response);
    })
    // $.ajax({
    //   url: "BLANK",
    //   method: 'POST',
    //   data:
    // })
  }

  render() {
    return (
      <div>
        <form className="reggieform" onSubmit={(e) => this.sendRegistration(e)}>
          <input type="text" name="name" placeholder="name here" onChange={this.handleNameChange.bind(this)} />
          <input type="password" name="password" placeholder="password here" onChange={this.handlePasswordChange.bind(this)} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default RegistrationForm;
