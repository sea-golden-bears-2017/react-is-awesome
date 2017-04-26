import React , { Component } from 'react';
import './App.css';
import $ from 'jquery';

class LogInForm extends Component {
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

  sendLogin(e) {
    e.preventDefault();
    // Set form equal to 'this' so it can be used within the ajax call
    var form = this;
    var userName = this.state.name;
    var userPassword = this.state.password;
    $.ajax({
      url: 'http://localhost:3000/sessions',
      method: 'POST',
      data: {
        user: { name: userName,
                password: userPassword
        }
      },
      crossDomain: true,
      xhrFields: { withCredentials: true }
    }).done((user) => {
      form.props.handlePostLogin(user);
    });

    // Reset registration fields
    this.refs.loginName.value = '';
    this.refs.loginPassword.value = '';
  }

  render() {
    return (
      <div>
        Please Login:
        <form className="login-form" onSubmit={(e) => this.sendLogin(e)}>
          <input type="text" name="name" ref="loginName" placeholder="name here" onChange={this.handleNameChange.bind(this)} />
          <input type="password" name="password" ref="loginPassword" placeholder="password here" onChange={this.handlePasswordChange.bind(this)} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default LogInForm;
