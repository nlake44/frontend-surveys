import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';

export class QuestionItem extends Component {
  getTextStyle = () => {
    return {
      margin: 10,
      paddingBottom: 40,
      width: 400,
    }
  }

  // Called when a new selection from multiple choice is made.
  newSelection = (answer) => {
    this.props.onChange(answer, this.props.question.id)
  }

  // Called when additional text is entered into a text field box.
  newText = event => {
    this.props.onChange(event.target.value, this.props.question.id)
  }

  // Render something different depending on the type of question:
  // freeForm or multiple.
  render() {
    if (this.props.question.type === 'multiple'){
      return (
        <Card style={ { fontFamily: 'Roboto', margin: '10px', padding: '10px' } } variant="outlined">
          <CardContent>
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
              <RadioButton value="agree" rootColor="black">
                Agree
              </RadioButton>
              <RadioButton value="stronglyAgree" rootColor="black">
                Strongly Agree
              </RadioButton>
            </RadioGroup>
          </CardContent>
        </Card>
      )
    }
    else if (this.props.question.type === 'freeForm'){
      return (
        <Card style={ { fontFamily: 'Roboto', margin: '10px', padding: '10px' } } variant="outlined">
          <CardContent>
            <form noValidate autoComplete="off">
              <div>
                <TextField
                  style={this.getTextStyle()}
                  id={this.props.question.id.toString()}
                  multiline label={this.props.question.text}
                  color="secondary"
                  onChange={this.newText}
                />
              </div>
            </form>
          </CardContent>
        </Card>
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


export default QuestionItem
