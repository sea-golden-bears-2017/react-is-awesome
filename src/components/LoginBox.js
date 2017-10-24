import React, { Component } from 'react';

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
    console.log(this.state);
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
