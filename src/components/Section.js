import React, { Component } from 'react';
// eslint-disable-next-line react/prefer-stateless-function
class Section extends Component {
  render() {
    return (
    <div className="section">
      <h2>{this.props.header}</h2>
      {this.props.children.map((child) => {
        return <li>{child}</li>
      })}
    </div>);
  }
}
export default Section;
