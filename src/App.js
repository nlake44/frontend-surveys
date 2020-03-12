import { BrowserRouter as Router, Route } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Questions from './components/Questions';
import React, {Component} from 'react';

class App extends Component {
  state = {
    requiresSubmit: false,
    peerQuestions: [
      {
        id: 1,
        type: 'multiple',
        text: 'Execution.',
        answer: '',
     },
    ],
    managerQuestions: [
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
        text: 'My manager provides the autonomy I need to do my job (i.e., does not "micro-manage" by getting involved in the details that should handled at other levels).',
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

  onSubmit = () => {
    console.log("SUBMITTED")
    // TODO
    // Post data to server.

    // Disable the button and update button text to "Update" 
    this.setState({requiresSubmit: false})
    console.log("Submit Requires update:")
    console.log(this.state.requiresSubmit)
  }

  onChange = (questionText, answer) => {
    console.log("OnChange!")
    console.log(questionText)
    console.log(answer)
    // Enable the submit button since the form was updated.
    this.setState({requiresSubmit: true})
    console.log("Requires update:")
    console.log(this.state.requiresSubmit)
  }

  render() {
    return(
      <Router>
        <div className="App">
          <Header userName={this.headerInfo.userName}
                  surveyType={this.headerInfo.surveyType}
          />
          <Route
            path="/manager/:uuid/"
            render={props => (
              <React.Fragment>
                <Questions onChange={this.onChange}
                           questions={this.state.managerQuestions}
                           match={props.match}
                />
                <Button
                  disabled={!this.state.requiresSubmit}
                  onClick={ this.onSubmit }
                  fullWidth={true}
                  variant="contained"
                  color="primary">
                  Submit
                </Button>
              </React.Fragment>
           )}
          />
          <Route
            exact
            path="/peer/:uuid/"
            render={props => (
              <React.Fragment>
                <Questions onChange={this.onChange}
                           questions={this.state.peerQuestions}
                           match={props.match}
                />
                <Button disabled={!this.state.requiresSubmit}
                        onClick={ this.onSubmit }
                        fullWidth={true}
                        variant="contained"
                        color="primary">
                  Submit
                </Button>
              </React.Fragment>
           )}
           />
           <Route
             exact
             path="/"
             render={props => (
                 <h1>Get the app from the <a href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>iOS App Store</a> or <a href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>Android Play Store</a>.</h1>
             )}
           />
          <Footer userName={this.headerInfo.userName}
                  surveyType={this.headerInfo.surveyType}
          />
        </div>
      </Router>
    )
  }
}

export default App;
