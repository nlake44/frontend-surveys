import React, { Component } from 'react';
import QuestionItem from './QuestionItem';
import PropTypes from 'prop-types';

class Questions extends Component {
  render() {
    return this.props.questions.map((question) => (
      <QuestionItem key={question.id} question={question} onChange={this.props.onChange}/>
    ));
  }
}

Questions.propTypes = {
  questions: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Questions;
