import React, {Component} from 'react'
import UserPage from './UserPage';
import BookIndex from './BookIndex';

class Content extends Component {

  renderContent() {
    if (this.props.content === 'home') {
      return(<div><UserPage books={this.props.books} friends={this.props.friends}/></div>)
    } else if (this.props.content === 'book') {
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
