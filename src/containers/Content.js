import React, {Component} from 'react'
import UserPage from './UserPage';
import BookIndex from './BookIndex';
import Login from '../components/Login';

class Content extends Component {
  constructor() {
    super();
    this.nameHandOff = this.nameHandOff.bind(this);
  }

  nameHandOff({token, name, user_id, current}) {
    this.props.handleUserLogin({token, name, user_id, current});
  }

  renderContent() {
    if (this.props.current === 'login' && this.props.name === '') {
      return(<div><Login name={this.props.name} nameHandOff={this.nameHandOff}/></div>)
    } else if (this.props.current === 'home') {
      return(<div><UserPage books={this.props.books} userId={this.props.user_id} token={this.props.token}/></div>)
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
