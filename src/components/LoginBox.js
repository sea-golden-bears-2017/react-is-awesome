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
  if (event.target.name === 'name') {
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
    this.props.login({name: this.state.name, id: response.user_id, token: response.token})
  });
}

  render() {
    return (
      <div className="loginBox">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" name="name" value={this.state.name} placeholder="username" />
          <input onChange={this.handleChange} type="password" name="password" value={this.state.password} placeholder="password" />
          <input type="submit" value="login" />
        </form>
      </div>
    );
  }
}

export default LoginBox;
