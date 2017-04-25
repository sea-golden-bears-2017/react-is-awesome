import React, { Component } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class TimesFive extends Component {

  multiplier() {
    return `The number is ${this.props.baseNum * 5}`;
  }

  render() {
    return <div>{this.multiplier()}</div>;
  }
}

TimesFive.propTypes = {
  baseNum: PropTypes.number.isRequired,
};

export default TimesFive;
