import React, { Component } from 'react';


class ActivityLog extends Component {
  constructor() {
    super()
    this.activityLogContent = this.activityLogContent.bind(this)
  }

  activityLogContent(id) {
    let listBooks = []
    this.props.friendsBooks[id].forEach( book => {
      listBooks.push(<li>{book.title}</li>)
    })
    return listBooks.join(' ')
  }

  render() {
    return(
      <div>
        <ul>
          {this.props.friends.forEach( friend => {
            <li>{friend.name} {this.activityLogContent(friend.id)} </li>
          })}
        </ul>
      </div>
    )
  }
}

export default ActivityLog
