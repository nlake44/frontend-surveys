import React, {Component} from 'react';
import Header from './components/layout/Header';
import Questions from './components/Questions';

class App extends Component {
  state = {
    questions: [
      {
        id: 1,
        questionType: 'multiple',
        text: "My manager does not micromanage me.",
        answered: false
      },
      {
        id: 2,
        questionType: 'multiple',
        text: "My manager provides stretch opportunities.",
        answered: false
      },
      {
        id: 3,
        questionType: 'multiple',
        text: "My manager cares about me as a person.",
        answered: false
      },
      {
        id: 4,
        questionType: 'freeForm',
        text: "What should my manager keep doing?",
        answered: false 
      }
    ]
  }

  headerInfo = {
    userName: "Navraj Chohan",
    surveyType: "Manager" 
  }

  render() {
    console.log(this.state.questions);
    return(
      <div className="App">
        <Header userName={this.headerInfo.userName} surveyType={this.headerInfo.surveyType}/>
        <Questions questions={this.state.questions} />
      </div>
    )
  }
}

export default App;
