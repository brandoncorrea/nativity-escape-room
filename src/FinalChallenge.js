import { Component } from "react";
import StoreContext from "./Store";

export default class FinalChallenge extends Component {
  static contextType = StoreContext

  constructor(props) {
    super(props)
    this.state = {
      question: {},
      answer: '',
      error: ''
    }

    this.timeoutUser = this.timeoutUser.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  componentDidMount = () => this.setState({question: this.context.currentFinalChallengeQuestion()})

  onValueChange = e => this.setState({answer: e.target.value})
  correctlyAnswered = () => this.parsedAnswer() === this.state.question.answer
  parsedAnswer = () => 
    this.state.question.options ?
      parseInt(this.state.answer) :
      this.state.answer.trim().toLowerCase()

  showNextQuestion() {
    let nextQuestion = this.context.finalChallengeQuestionNumber() + 1
    this.context.setFinalChallengeQuestionNumber(nextQuestion)
    let question = this.context.getFinalChallengeQuestion(nextQuestion)
    if (question)
      this.setState({ question, answer: '', error: '' })
  }

  timeoutUser() {
    if (!this.state.timer) {
      let timer = setInterval(this.countDown, 1000);
      this.setState({timer, seconds: 30})
    }
  }

  displayErrorMessage() {
    this.setState({error: "That was not the right answer!"})
    if (this.state.question.options) this.timeoutUser()
  }

  countDown() {
    let seconds = this.state.seconds - 1;
    if (seconds <= 0) {
      clearInterval(this.state.timer)
      this.setState({timer: undefined, seconds: 0})
    } else
      this.setState({ seconds })
  }

  submitAnswer = () =>
    this.correctlyAnswered() ?
      this.showNextQuestion() :
      this.displayErrorMessage()

  render = () =>
    <div className="container text-center mt-3">
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
        this.state.error &&
        <h3 className="text-danger mb-3">{this.state.error}</h3>
      }
      {
        (this.state.answer || this.state.timer) &&
        <div className="d-grid mb-3">
          <button className="btn btn-primary" type="button" onClick={this.submitAnswer} disabled={this.state.timer}>
            { this.state.timer ? this.state.seconds : "Submit" }
          </button>
        </div>
      }
    </div>
}
