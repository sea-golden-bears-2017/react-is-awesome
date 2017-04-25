import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var BS                 = require('react-bootstrap'),
    Input              = BS.Input,
    Button             = BS.Button;

class Login extends Component {
  render() {
    <form>
      <Input type='name'
            name='name'
            label='Name'
            placeholder='Enter name...'
            // disabled={this.props.signedIn}
            // value={this.state.email}
            // onChange={this.handleInputChange}
          />

      <Input type='password'
            name='password'
            label='Password'
            placeholder='Enter password...'
            // disabled={this.props.signedIn}
            // value={this.state.password}
            // onChange={this.handleInputChange}
          />

      <Button className='btn btn-primary'
              // onClick={this.handleSignInClick}
              // disabled={this.props.signedIn}
              >
        Sign In
      </Button>
    </form>
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
