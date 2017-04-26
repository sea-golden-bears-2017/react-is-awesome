import React, { Component } from 'react';
import './App.css';
import MainContainer from './main-container.js';
import NavBar from './navbar.js';
import $ from 'jquery'

class PageContent extends Component {
  constructor(){
    super();
    this.state = {
      navbar: {
        buttons: ['Register', 'Login', 'Home'],
      },
      mainContainer: {
        content: "Home",
      },
      user: {
        userId: null,
      }
    }
  }
  handlePostLogin(loggedInUser){

    this.setState( {
      navbar: {
        buttons: ['Logout', 'Home'],
      },
      mainContainer: {
        content: "Home",
      },
      user: {
        userId: loggedInUser.user_id,
      },
    })
  }

  handleClick(i){
    // const registrationForm = <RegistrationForm handlePostLogin={(id) => this.handlePostLogin(id) } />;
    // const loginForm = <LogInForm handlePostLogin={(id) => this.handlePostLogin(id) }  />;
    // const homepage = <HomePage />;
    // let stateVariable = null;

    if (i === "Logout"){
      $.ajax( {
        url: 'http://localhost:3000/sessions/' + this.state.user.userId,
        method: 'DELETE',
        crossDomain: true,
        xhrFields: { withCredentials: true }
      }).done((response) => {
        this.setState( {
          navbar: {
            buttons: ['Register', 'Login', 'Home'],
          },
          mainContainer: {
            content: i,
          },
          user: {
            userId: null,
          }
        })
      })
    }
    else {
      // switch(i){
      //   case "Register":
      //     stateVariable = registrationForm;
      //     break;
      //   case "Login":
      //     stateVariable = loginForm;
      //     break;
      //   case "Home":
      //     stateVariable = homepage;
      //     break;
      //   default:
      //     console.log("OMG errorz");
      //     break;
      // }
      this.setState( {
        mainContainer: {
          content: i,
        }
      })
    }
  }
  render() {

    return (
      <div className="main-container">
        <NavBar onClick={(i) => this.handleClick(i)} buttons={this.state.navbar.buttons}/>
        <div className="App-intro">
          <MainContainer content={this.state.mainContainer.content} handlePostLogin={(id) => this.handlePostLogin(id)}/>
        </div>
      </div>
    );
  }
}

export default PageContent;
