import React, {Component} from 'react'
import UserPage from './UserPage';
import BookIndex from './BookIndex';
import Login from '../components/Login';

class Content extends Component {

  renderContent() {
    if (this.props.current === 'login') {
      return(<div><Login /></div>)
    } else if (this.props.current === 'home') {
      return(<div><UserPage books={this.props.books} friends={this.props.friends}/></div>)
    } else if (this.props.current === 'book') {
      return(<div><BookIndex books={this.props.books} /></div>)
    }
  }

  render(){
    return(
      <div>{this.renderContent()}</div>
    )
  }
}

export default Content;
