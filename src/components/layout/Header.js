import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    return (
      <header style={headerStyle}>
        <h1>This is a {this.props.surveyType} Survey for</h1>
        <h2>{this.props.userName}</h2>
        <h3>All answers are anonymous. Answer to the best of your abilities.</h3>
      </header>
    );
  }
}

Header.propTypes = {
  userName: PropTypes.string.isRequired,
  surveyType: PropTypes.string.isRequired
}

const headerStyle = {
  background: '#111',
  color: '#ddd',
  textAlign: 'center',
  padding: '10px',
  fontFamily: 'Roboto',
}

export default Header;
