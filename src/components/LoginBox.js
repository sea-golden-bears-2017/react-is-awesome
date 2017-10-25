import React, { Component } from 'react';
import $ from 'jquery';

// eslint-disable-next-line react/prefer-stateless-function

class LoginBox extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: '',
      password: '',
    };
  }

  handleChange(event) {
    if (event.target.id === 'name') {
      this.setState({
        name: event.target.value,
      });
    } else {
      this.setState({
        password: event.target.value,
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    $.ajax({
      url: 'https://react-is-awesome-backend.herokuapp.com/sessions',
      method: 'POST',
      data: {
        user: {
          name: this.state.name,
          password: this.state.password,
        },
      },
    }).done((response) => {
      if (response) {
        this.props.setUser(this.state.name, response.user_id, response.token)
        alert(`${this.state.name} is logged in!`);
      }
    }).fail(() => {
      alert('Invalid username or password');
    });
  }

  render() {
    return (
      <div className="LoginBox">
        <p>I'm a box!</p>
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input id="name" type="text" value={this.state.name} onChange={this.handleChange} />
          <label>Password: </label>
          <input id="password" type="password" value={this.state.password} onChange={this.handleChange} />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default LoginBox;
