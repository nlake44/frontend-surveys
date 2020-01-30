import React, { Component } from 'react';
import QuestionItem from './QuestionItem';
import PropTypes from 'prop-types';

class Questions extends Component {
  render() {
    return this.props.questions.map((question) => (
      <QuestionItem key={question.id} question={question} />
    ));
  }
}

Questions.propTypes = {
  questions: PropTypes.array.isRequired
}

export default Questions;
