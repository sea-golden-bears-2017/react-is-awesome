import React, { Component } from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class NumberGetter extends Component {

  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    const num = parseInt($(this.inputElement).val(), 10);
    this.props.onNewNumber(num);
  }

  render() {
    return (
      <div>
        <input ref={ref => (this.inputElement = ref)} type="text" />
        <button onClick={this.clickHandler}>change number </button>
      </div>
    );
  }
}

NumberGetter.propTypes = {
  onNewNumber: PropTypes.function.isRequired,
};

export default NumberGetter;
