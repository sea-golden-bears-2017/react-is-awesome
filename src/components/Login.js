import React, { Component } from 'react';
import $ from 'jquery';

class Login extends Component {
  // krystal
  // admin_cindy
  constructor(props){
    super(props);
    this.state = {
                    username: "",
                    password: "",
                  }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
    const data = {user: {
                    name: this.state.username,
                    password: this.state.password,
                  }}
    $.ajax({
      method: 'POST',
      url: 'https://react-is-awesome-backend.herokuapp.com/sessions',
      data
    }).done((response) => {
      this.props.login(response, this.state.username);
    });
  }

  onChange(e){
    // The .value function refers to the contents of respective inputs
    // and not the value attribute on the input html tag.
    const value = e.target.value;
    const name = e.target.name;
    if(name === 'username'){
      this.setState({username: value})
    } else if(name === 'password'){
      this.setState({password: value})
    }
  }

  render() {
    return(
      <div>
        <h1>Login-io</h1>
        <form onSubmit={this.onSubmit}>
          {/* Input responsible for changing state based on contents */}
          {/* Please see onChange instance function */}
          <input onChange={this.onChange} type="text" placeholder="username" name="username" value={this.state.username} />
          <input onChange={this.onChange} type="password" placeholder="password" name="password" value={this.state.password} />
          <input type="submit" />
        </form>
        <div>{this.state.username}</div>
        <div>{this.state.password}</div>
      </div>
    )
  };

}
export default Login;
