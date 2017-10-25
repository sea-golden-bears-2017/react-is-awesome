import React, { Component } from 'react';

class About extends Component {
  render(){
    return(
      <div>
        <header>
          <h1>This Is a Great App</h1>
        </header>
        <main className="about">
          <p>'nuff said....</p>
        </main>
        <footer className="about-footer">
          Contact us at Ash@cool_people.org or JSimoni@cool_people.org
          if you want to learn more.
        </footer>
      </div>
    );
  }
}

export default About;
