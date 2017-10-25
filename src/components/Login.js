import React, { Component } from 'react';
import $ from 'jquery';

// eslint-disable-next-line react/prefer-stateless-function

class Login extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: '',
      password: '',
    };
  }

  onChange(event) {
    if (event.target.name === 'username') {
      this.setState({
        name: event.target.value
      })

    } else if (event.target.name === 'password') {
      this.setState({
        password: event.target.value
      })
    }
  }

  onSubmit(event) {
    event.preventDefault();
    $.ajax({
      method: 'POST',
      url: 'https://react-is-awesome-backend.herokuapp.com/sessions',
      data: {
        user: {
          name: this.state.name,
          password: this.state.password
        },
      }
    }).done((response) => {
      const token = response.token
      const name = this.state.name
      const user_id = response.user_id
      const current = 'home'
      this.props.nameHandOff({token, name, user_id, current});
      $('form').trigger('reset');
    }).fail(() => {
      alert("Invalid combination of username/password.")
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>username
        <input onChange={(event) => this.onChange(event)} value={this.state.value} type="text" name="username" /></label>
        <label>password
        <input onChange={(event) => this.onChange(event)} value={this.state.value} type="password" name="password" /></label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}
export default Login;
