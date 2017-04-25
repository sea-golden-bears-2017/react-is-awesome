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

  handleClick(i){
    const registrationForm = <RegistrationForm />;
    const loginForm = <LogInForm />;
    const homepage = <HomePage />;
    switch(i){
      case "Register":
        this.setState({
          navbar: {
            selected: i
          },
          mainContainer: {
            content: registrationForm
          }
        });
        break;
      case "Login/Logout":
        this.setState({
          navbar: {
            selected: i
          },
          mainContainer: {
            content: loginForm
          }
        });
        break;
      case "Home":
        this.setState({
          navbar: {
            selected: i
          },
          mainContainer: {
            content: homepage
          }
        });
        break;
      default:
        console.log("OMG errorz");
        break;
    }
  }
  render() {
    return (
      <div className="main-container">
        <NavBar onClick={(i) => this.handleClick(i)}/>
        <MainContainer content={this.state.mainContainer.content}/>
      </div>
    );
  }
}

export default PageContent;
