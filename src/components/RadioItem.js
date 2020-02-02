import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class RadioItem extends Component {
  getStyle = () => {
    return itemStyle
  }

  onChange = (e) => this.setState({ [e.target.name]:
    e.target.value });

  getLabel = () => {
    if (this.props.text === "") {
      return
    }
    return <label htmlFor="{props.value}">{this.props.text}</label>
  }

  render() {
    return (
      <div>
      <div><input type="radio" onChange={this.onChange} style={this.getStyle()} /></div>
      <div>{this.getLabel()}</div>
      </div>
    )
  }
}

RadioItem.propTypes = {
  question: PropTypes.object.isRequired,
  text: PropTypes.string
}

const itemStyle = {
  backgroundColor: '#f4f4f4'
}

export default RadioItem
