import React, {Component} from 'react'
import $ from 'jquery'

class Login extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      password: ''
    };
    this.handleName = this.handleName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(e){
    this.setState({name: e.target.value})
  }

  handlePassword(e){
    this.setState({password: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();

    $.ajax({
      method: 'POST',
      url: 'https://react-is-awesome-backend.herokuapp.com/sessions',
      data: {user: {name: this.state.name, password: this.state.password}}
    }).done((response)=>{
      console.log(response)
      debugger
    });
  }

  render(){
    return(
      <form className="login-form" onSubmit={this.handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" value={this.state.name} onChange={this.handleName} />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" value={this.state.password} onChange={this.handlePassword}/>
        </div>
        <input type="submit" value="Login"/>
      </form>
    )
  }
}

export default Login
