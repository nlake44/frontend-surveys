import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
  render() {
    return (
      <div>
        <div style={phantomStyle}>
        </div>
        <div style={footerStyle}>
          <h3>{this.props.userName} {this.props.surveyType} Survey</h3>
        </div>
      </div>
    )
  }
}

Footer.propTypes = {
  userName: PropTypes.string.isRequired,
  surveyType: PropTypes.string.isRequired
}

const footerStyle = {
  background: '#111',
  color: '#ddd',
  textAlign: 'center',
  padding: '0px',
  fontFamily: 'Roboto',
  position: "fixed",
  bottom: "0",
  left: "0",
  width: "100%",
}

const phantomStyle = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%",
}

export default Footer;
