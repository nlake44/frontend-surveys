import React, { Component } from 'react'
import PropTypes from 'prop-types';

import RadioItem from './RadioItem'

export class RadioOptions extends Component {
  state = {
    selectedOption: this.props.question.numberOfOptions - 1
  }

  getStyle = () => {
    return itemStyle
  }

  //onChange = (e) => this.setState({ [e.target.name]:
  //  e.target.value });
  onChange = (e) => {
    this.setState({
      selectedOption: parseInt(e.target.value)
    })
  }

  getOptionLabel = (i) => {
    if (i===0) {
      return "(" + (i + 1).toString() + ") " + this.props.question.lowOptionText
    }
    if (i===(this.props.question.numberOfOptions - 1)) {
      return "(" + (i + 1).toString() + ") " + this.props.question.highOptionText
    }
    return ''
  }

  createOptions = () => {
    let text = ''
    let radioItems = []
    for (let i=0; i<this.props.question.numberOfOptions; i++) {
      text = this.getOptionLabel(i)
      let key = "radioItem-" + i.toString() + "-" + this.props.question.id.toString()
      radioItems.push(<td><RadioItem key={key} question={this.props.question} onChange={this.onChange} value={i} text={text} selected={this.state.selectedOption === i}/></td>)
    }
    return radioItems
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
           {this.createOptions()}
          </tr>
        </tbody> 
      </table>
    )
  }
}

RadioOptions.propTypes = {
  question: PropTypes.object.isRequired
}

const itemStyle = {
  backgroundColor: '#f4f4f4'
}

export default RadioOptions
