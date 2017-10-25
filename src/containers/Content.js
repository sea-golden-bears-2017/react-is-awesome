import React, {Component} from 'react'
import UserPage from './UserPage';
import BookIndex from './BookIndex';
import Login from '../components/Login';

class Content extends Component {
  constructor() {
    super();
    this.nameHandOff = this.nameHandOff.bind(this);
  }

  nameHandOff({token, name, user_id}) {
    this.props.handleUserLogin({token, name, user_id});
  }

  renderContent() {
    if (this.props.current === 'login') {
      return(<div><Login name={this.props.name} nameHandOff={this.nameHandOff}/></div>)
    } else if (this.props.current === 'home') {
      return(<div><UserPage books={this.props.books} friends={this.props.friends}/></div>)
    } else if (this.props.current === 'book') {
      return(<div><BookIndex books={this.props.books} /></div>)
    }
  }

  render(){
    const name = this.props.name
    return(
      <div>{this.renderContent()}</div>
    )
  }
}

export default Content;
