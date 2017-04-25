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
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/sessions',
      data: {user: this.state},
    }).done((response) => {
      console.log("SUCCESS");
      
    });
    }
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

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Nerdmeter</h1>
        </div>
        <div className="content">
          <Login />
        </div>
      </div>
    );
  }
}

export default App;
