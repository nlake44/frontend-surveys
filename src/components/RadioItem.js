import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class RadioItem extends Component {
  state = {
    checked: false,
    value: ''
  }

  getStyle = () => {
    return itemStyle
  }

  getLabelValue = () => {
    if (this.props.text === "") {
      return
    }
    return <label htmlFor="{props.value}">{this.props.text}</label>
  }

  render() {
    return (
      <div className="form-check">
        <label>
          <div>
            <input
              type="radio"
              onChange={this.props.onChange}
              style={this.getStyle()}
              value={this.props.value}
              checked={this.props.selected}
            />
          </div>
          <div>
            {this.getLabelValue()}
          </div>
        </label>
      </div>
    )
  }
}

RadioItem.propTypes = {
  question: PropTypes.object.isRequired,
  text: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func,
  selected: PropTypes.bool
}

const itemStyle = {
  backgroundColor: '#f4f4f4'
}

export default RadioItem
