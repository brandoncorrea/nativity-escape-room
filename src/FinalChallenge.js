import { Component } from "react";
import MultipleChoice from "./components/MultipleChoice";
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
    this.showNextQuestion = this.showNextQuestion.bind(this)
  }

  componentDidMount = () => this.setState({question: this.context.currentFinalChallengeQuestion()})
  onValueChange = e => this.setState({answer: e.target.value})
  correctlyAnswered = () => this.parsedAnswer() === this.state.question.answer
  parsedAnswer = () => 
    this.state.question.options ?
      parseInt(this.state.answer) :
      this.state.answer.trim().toLowerCase()

  showNextQuestion = () => {
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
    this.state.question.options ?
      <MultipleChoice
        key={this.state.question.id} 
        id={this.state.question.id}
        title="Final Challenge"
        answer={this.state.question.answer}
        options={this.state.question.options}
        onSuccess={this.showNextQuestion}
        question={this.state.question.text}
        /> :
      <div className="container text-center mt-3">
        <h1>Final Challenge</h1>
        <label className="form-label h5">{this.state.question.text}</label>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            value={this.state.answer}
            onChange={this.onValueChange}
            name={`question-${this.state.question.id}`} />
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
