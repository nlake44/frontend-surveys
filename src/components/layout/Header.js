import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    return (
      <header style={headerStyle}>
        <h1>This is a {this.props.surveyType} Survey</h1>
        <h2>{this.props.userName}</h2>
      </header>
    );
  }
}

Header.propTypes = {
  userName: PropTypes.string.isRequired,
  surveyType: PropTypes.string.isRequired
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
}

export default Header;
