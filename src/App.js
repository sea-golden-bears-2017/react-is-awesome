import React, { Component } from 'react';
import './App.css';


class Login extends Component {
constructor(props) {
  super(props);
  this.state = { username: '', password: '' };
}
  handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    this.setState({ username: event.target.username, password: event.target.password });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input ref={ref => (this.username = ref)} value={this.state.username} type="text" placeholder="Username" />
          <input ref={ref => (this.password = ref)} value={this.state.password} type="password" placeholder="Password" />
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
