import React, {Component} from 'react';
import Header from './components/layout/Header';
import Questions from './components/Questions';

class App extends Component {
  state = {
    // TODO: All questions will eventually come server side.
    questions: [
      {
        id: 1,
        type: 'multiple',
        text: 'My manager does not micromanage me.',
        answered: false,
        numberOfOptions: 5,
        lowOptionText: 'Strongly Disagree',
        highOptionText: 'Strongly Agree'
      },
      {
        id: 2,
        type: 'multiple',
        text: 'My manager provides stretch opportunities.',
        answered: false,
        numberOfOptions: 5,
        lowOptionText: 'Strongly Disagree',
        highOptionText: 'Strongly Agree'
      },
      {
        id: 3,
        type: 'multiple',
        text: 'My manager cares about me as a person.',
        answered: false,
        numberOfOptions: 5,
        lowOptionText: 'Strongly Disagree',
        highOptionText: 'Strongly Agree'
      },
      {
        id: 4,
        type: 'freeForm',
        text: "What should my manager keep doing?",
        answered: false,
        numberOfOptions: 0,
        lowOptionText: '',
        highOptionText: '',
      },
      {
        id: 5,
        type: 'freeForm',
        text: "What should my manager improve on?",
        answered: false,
        numberOfOptions: 0,
        lowOptionText: '',
        highOptionText: '',
      }
    ]
  }

  headerInfo = {
    userName: "Navraj Chohan",
    surveyType: "Manager" 
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMITTED")
    // this.state.questions
  }

  onChange = event => {
    console.log("OnChange!")
    console.log(event)
  }

  render() {
    console.log(this.onChange)
    return(
      <div className="App">
        <Header userName={this.headerInfo.userName} surveyType={this.headerInfo.surveyType}/>
        <div>
          <Questions onChange={this.onChange} questions={this.state.questions} />
        </div>
      </div>
    )
  }
}

export default App;
