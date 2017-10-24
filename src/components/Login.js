import React, { Component } from 'react';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
                    username: "",
                    password: "",
                  }
    this.onChange = this.onChange.bind(this)
  }

  onSubmit(e){

  }
  onChange(e){
    const newThing = e.target.value;
    const type = e.target.name;
    if(type === 'username'){
      this.setState({username: newThing})
    }else if(type === 'password'){
      this.setState({password: newThing})
    }
  }

  render() {
    return(
      <div>
        <h1>Login-io</h1>
        <form onSubmit={this.onSubmit}>
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
