import React, { Component } from 'react';
import './App.css';
import MainContainer from './main-container.js';
import NavBar from './navbar.js';
import NavBarButton from './nav-bar-button.js';
import RegistrationForm from './registration-form.js';
import LogInForm from './login-form.js';
import HomePage from './homepage.js';

class PageContent extends Component {


  constructor(){
    function initializeNavBar() {
      return (
          <nav>
            <NavBarButton value="Register" onClick={() => this.props.onClick("Register")} />
            <NavBarButton value="Login/Logout" onClick={() => this.props.onClick("Login/Logout")} />
            <NavBarButton value="Home" onClick={() => this.props.onClick("Home")} />
          </nav>
      );
    }
    super();
    this.state = {
      navbar: {
        buttons: initializeNavBar(),
      },
      mainContainer: {
        content: null,
      },
    }
  }



  handlePostLogin(){
    // Change state of nav bar
    // this.setState( {
    //   navbar: {
    //     buttons:
    //   }
    // })
    // Navigate to the homepage
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
        <NavBar onClick={(i) => this.handleClick(i)} buttons={this.state.navbar.buttons} />
        <MainContainer content={this.state.mainContainer.content} />
      </div>
    );
  }
}

export default PageContent;
