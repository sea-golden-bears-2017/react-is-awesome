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
    let form = this;
    var userName = this.state.name;
    var userPassword = this.state.password;

    $.ajax({
      url: 'http://localhost:3000/users',
      method: 'POST',
      data: {
        user: { name: userName,
                password: userPassword
        }
      },
      crossDomain: true,
      xhrFields: { withCredentials: true },
    }).done((successfulRegistration) => {
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
      })
    })
    // Reset registration fields
    this.refs.registrationName.value = '';
    this.refs.registrationPassword.value = '';
  }

  render() {
    return (
      <div>
        Register Your Information Below:
        <form className="reggieform" onSubmit={(e) => this.sendRegistration(e)}>
          <input type="text" name="name" ref="registrationName" placeholder="name here" onChange={this.handleNameChange.bind(this)} />
          <input type="password" name="password" ref="registrationPassword" placeholder="password here" onChange={this.handlePasswordChange.bind(this)} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default RegistrationForm;
