import React, {Component} from 'react';
import Questions from './components/Questions';

class App extends Component {
  state = {
    questions: [
      {
        id: 1,
        text: "Do you like things?",
        answered: false
      },
      {
        id: 2,
        text: "Do you hate things?",
        answered: false
      }
    ]
  }
  render() {
    console.log(this.state.questions);
    return(
      <div className="App">
        <Questions questions={this.state.questions} />
      </div>
    )
  }
}

export default App;
