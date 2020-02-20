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
        text: 'I would recommend my manager to others.',
        answer: '',
     },
      {
        id: 2,
        type: 'multiple',
        text: 'My manager assigns opportunities to help me develop in my career.',
        answer: '',
     },
      {
        id: 3,
        type: 'multiple',
        text: 'My manager communicates clear goals for our team.',
        answer: '',
      },
      {
        id: 4,
        type: 'multiple',
        text: 'My manager gives me actionable feedback on a regular basis.',
        answer: '',
      },
      {
        id: 5,
        type: 'multiple',
        text: 'My manager provides the autonomy I need to do my job (i.r., does not "micro-manage" by getting involved in the details that should handled at other levels).',
        anser: '',
      },
      {
        id: 6,
        type: 'multiple',
        text: 'My manager keeps the team focused on priorities, even when it is difficult (e.g., declining or deprioritizing other projects).',
        anser: '',
      },
      {
        id: 7,
        type: 'multiple',
        text: 'My manager regularly shares relevant information from their manager and senior leadership.',
        answer: '',
      },
      {
        id: 8,
        type: 'multiple',
        text: 'My manager has the technical expertise (e.g., technical judgment in Tech, selling in Sales, accounting in Finance) required to effectively manage me.',
        answer: '',
      },
      {
        id: 9,
        type: 'multiple',
        text: 'The actions of my manager show they value the perspective I bring to the team, even if it is different from their own.',
        answer: '',
      },
      {
         id: 10,
        type: 'multiple',
        text: 'The actions of my manager show they value the perspective I bring to the team, even if it is different from their own.',
        answer: '',
      },
      {
        id: 11,
        type: 'multiple',
        text: 'My manager makes tough decisions effectively (e.g., decisisons involving multiple teams, competing priorities).',
        answer: '',
      },
      {
         id: 12,
        type: 'multiple',
        text: 'My manager effectively collaborates across boundaries (e.g., team, organizational).',
        answer: '',
      },
      {
        id: 13,
        type: 'freeForm',
        text: "What should my manager keep doing?",
        answered: false,
        numberOfOptions: 0,
        lowOptionText: '',
        highOptionText: '',
      },
      {
        id: 14,
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

  onChange = (questionText, answer) => {
    console.log("OnChange!")
    console.log(questionText)
    console.log(answer)
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
