import React, { Component } from 'react'
import PropTypes from 'prop-types';

import RadioOptions from './RadioOptions'

export class QuestionItem extends Component {
  getStyle = () => {
    return itemStyle
  }

  getMultipleChoiceStyle = () => {
    return multipleChoiceStyle
  }

  getFreeFormStyle = () => {
    return freeFormStyle
  }

  getInputStyle = () => {
    return inputStyle
  }

  onChange = (e) => this.setState({ [e.target.name]:
    e.target.value });

  // Render something different depending on the type of question:
  // freeForm or multiple.
  render() {
    if (this.props.question.type === 'multiple'){
      return (
        <div onChange={this.onChange} style={this.getMultipleChoiceStyle()}>
          <p>{ this.props.question.text }</p>
          <RadioOptions key={this.props.question.id} question={this.props.question} />
        </div>
      )
    }
    else if (this.props.question.type === 'freeForm'){
      return (
       <form style={this.getFreeFormStyle()}>
          <input
            type="text"
            style={this.getInputStyle()}
            name={this.props.question.id}
            placeholder={this.props.question.text}
            onChange={this.onChange}
          />
        </form>
      )
    }
    else {
      return (
        <div stype={this.getStyle()}>
          <p>{ this.props.question.type } question type is unknown</p>
        </div>
      )
    }
  }
}

QuestionItem.propTypes = {
  question: PropTypes.object.isRequired
}

const itemStyle = {
  backgroundColor: '#f4f4f4'
}

const freeFormStyle = {
  backgroundColor: '#f4f4f4',
  display: 'flex',
  padding: '10px'
}

const inputStyle = {
  flex: '10',
  padding: '5px'
}

const multipleChoiceStyle = {
  flex: '10',
  padding: '10px'
}

export default QuestionItem
