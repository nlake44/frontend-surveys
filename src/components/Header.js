import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    return (
      <div>
        <h1>This is a {this.props.surveyType} survey</h1>
        <h2>{this.props.userName}</h2>
      </div>
    );
  }
}

Header.propTypes = {
  userName: PropTypes.string.isRequired,
  surveyType: PropTypes.string.isRequired
}

export default Header;
