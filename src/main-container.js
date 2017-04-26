import React, { Component } from 'react';
import './App.css';
import RegistrationForm from './registration-form.js';
import LogInForm from './login-form.js';
import HomePage from './homepage.js';

class MainContainer extends Component {
  render() {
    const registrationForm = <RegistrationForm handlePostLogin={(id) => this.props.handlePostLogin(id) } />;
    const loginForm = <LogInForm handlePostLogin={(id) => this.props.handlePostLogin(id) }  />;
    const homepage = <HomePage />;
    let stateVariable = null

    switch(this.props.content){
      case "Register":
        stateVariable = registrationForm;
        break;
      case "Login":
        stateVariable = loginForm;
        break;
      case "Home":
        stateVariable = homepage;
        break;
      case "Logout":
        stateVariable = homepage;
        break;
      default:
        console.log("OMG errorz");
        break;
    }
    return (
      <div>
        {stateVariable}
      </div>
    );
  }
}

export default MainContainer;
