import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', password: '' };
  }
  handleUsernameChange(event) {
    this.setState({ name: event.target.value });
  }
  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    let loginForm = this;
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/sessions',
      data: {user: this.state},
      crossDomain: true,
      xhrFields: { withCredentials: true },
    }).done((response) => {
      loginForm.props.onNewSession(response.user_id);
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="Username" onChange={this.handleUsernameChange.bind(this)} />
          <input type="password" placeholder="Password" onChange={this.handlePasswordChange.bind(this)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Login;
