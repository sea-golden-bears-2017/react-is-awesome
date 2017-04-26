import React, { Component } from 'react';
import './App.css';
import MainContainer from './main-container.js';
import NavBar from './navbar.js';
import RegistrationForm from './registration-form.js';
import LogInForm from './login-form.js';
import HomePage from './homepage.js';

class PageContent extends Component {
  constructor(){
    super();
    this.state = {
      navbar: {
        selected: null,
      },
      mainContainer: {
        content: null,
      },
    }
  }

  handlePostLogin(){
    
  }

  handleClick(i){
    const registrationForm = <RegistrationForm handlePostLogin={this.handlePostLogin}/>;
    const loginForm = <LogInForm handlePostLogin={this.handlePostLogin}/>;
    const homepage = <HomePage handlePostLogin={this.handlePostLogin}/>;
    let stateVariable = null;

    switch(i){
      case "Register":
        stateVariable = registrationForm;
        break;
      case "Login/Logout":
        stateVariable = loginForm;
        break;
      case "Home":
        stateVariable = homepage;
        break;
      default:
        console.log("OMG errorz");
        break;
    }
    this.setState( {
      mainContainer: {
        content: stateVariable,
      }
    })
  }
  render() {
    return (
      <div className="main-container">
        <NavBar onClick={(i) => this.handleClick(i)}/>
        <MainContainer content={this.state.mainContainer.content} handlePostLogin={this.handlePostLogin}/>
      </div>
    );
  }
}

export default PageContent;
