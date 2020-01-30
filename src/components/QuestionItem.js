import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class QuestionItem extends Component {
  getStyle = () => {
    { return itemStyle }
  }

  render() {
    return (
      <div style={this.getStyle()}>
        <p>{ this.props.question.text }</p>
      </div>
    )
  }
}

QuestionItem.propTypes = {
  question: PropTypes.object.isRequired
}

const itemStyle = {
  backgroundColor: '#f4f4f4'
}

export default QuestionItem
