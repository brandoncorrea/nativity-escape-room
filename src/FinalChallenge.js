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

  submitAnswer = () =>
    this.correctlyAnswered() ?
      this.showNextQuestion() :
      this.setState({error: "That was not the right answer!"})

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
        this.state.answer &&
        <div className="d-grid mb-3">
          <button className="btn btn-primary" type="button" onClick={this.submitAnswer}>Submit</button>
        </div>
      }
    </div>
}
