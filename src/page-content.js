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
