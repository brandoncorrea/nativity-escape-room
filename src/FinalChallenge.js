import { Component } from "react";
import Navigator from "./Navigator";
import Store from "./Store";

export default class FinalChallenge extends Component {

  constructor(props) {
    super(props)
    this.state = {
      question: Store.finalChallengeQuestion(),
      answer: '',
      error: ''
    }

    if (!this.state.question) Navigator.kingdomKeys()
  }

  onValueChange = e => this.setState({answer: e.target.value})
  correctlyAnswered = () => this.parsedAnswer() === this.state.question.answer
  parsedAnswer = () => 
    this.state.question.options ?
      parseInt(this.state.answer) :
      this.state.answer.trim().toLowerCase()

  showQuestionOrNavigate = () =>
    Store.finalChallengeQuestion() ?
      this.setState({
        question: Store.finalChallengeQuestion(), 
        answer: '',
        error: ''
      }) :
      Navigator.kingdomKeys()

  showNextQuestion() {
    Store.incFinalChallengeQuestionNumber()
    this.showQuestionOrNavigate()
  }

  submitAnswer = () =>
    this.correctlyAnswered() ?
      this.showNextQuestion() :
      this.setState({error: "That was not the right answer!"})

  render = () =>
    <div className="container text-center">
      <h1>Final Challenge</h1>
      <label className="form-label h5">{this.state.question.text}</label>
      <div key={this.state.question.id} className="mb-3">
        {
          this.state.question.options ?
            this.state.question.options.map(({id, value}) =>
              <div key={id} className="btn">
                <input
                  type="radio"
                  className="btn-check"
                  id={`question-${this.state.question.id}-${id}`}
                  name={`question-${this.state.question.id}`}
                  value={id}
                  checked={this.parsedAnswer() === id}
                  onChange={this.onValueChange}
                  autoComplete="off" />
                <label
                  className="btn btn-outline-success"
                  htmlFor={`question-${this.state.question.id}-${id}`}>
                    {value}
                </label>
              </div>) :
            <input 
              className="form-control" 
              type="text" 
              value={this.state.answer}
              onChange={this.onValueChange}
              name={`question-${this.state.question.id}`} />
        }
      </div>
      {
        this.state.answer &&
        <div className="d-grid mb-3">
          <button className="btn btn-primary" type="button" onClick={this.submitAnswer}>Submit</button>
        </div>
      }
      {
        this.state.error &&
        <p className="text-danger">{this.state.error}</p>
      }
    </div>
}
