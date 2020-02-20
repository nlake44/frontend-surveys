import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { RadioGroup, RadioButton, ReversedRadioButton } from 'react-radio-buttons';

export class QuestionItem extends Component {
  getStyle = () => {
    return itemStyle
  }

  getFreeFormStyle = () => {
    return freeFormStyle
  }

  getInputStyle = () => {
    return inputStyle
  }

  newSelection = (answer) => {
    this.props.onChange(answer, this.props.question.id)
  }

  // Render something different depending on the type of question:
  // freeForm or multiple.
  render() {
    if (this.props.question.type === 'multiple'){
      return (
      <div>
        <h2>{this.props.question.text}</h2>
        <RadioGroup onChange={this.newSelection} horizontal>
          <RadioButton value="stronglyDisagree" rootColor="black">
            Strongly Disagree
          </RadioButton>
          <RadioButton value="disagree" rootColor="black">
            Disagree
          </RadioButton>
          <RadioButton value="neutral" rootColor="black">
            Neutral
          </RadioButton>
          <ReversedRadioButton value="agree" rootColor="black">
            Agree
          </ReversedRadioButton>
          <ReversedRadioButton value="stronglyAgree" rootColor="black">
            Strongly Agree
          </ReversedRadioButton>
        </RadioGroup>
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
            onChange={this.props.onChange.bind(this, this.props.question.id)}
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
  question: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
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

export default QuestionItem
