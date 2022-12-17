import { Component } from "react";
import MultipleChoice from "./components/MultipleChoice";
import WrittenResponse from "./components/WrittenResponse";
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
  showNextQuestion = () => {
    let nextQuestion = this.context.finalChallengeQuestionNumber() + 1
    this.context.setFinalChallengeQuestionNumber(nextQuestion)
    let question = this.context.getFinalChallengeQuestion(nextQuestion)
    if (question)
      this.setState({ question, answer: '', error: '' })
  }

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
      <WrittenResponse
        title="Final Challenge"
        question={this.state.question.text}
        errorMessages={['That was not the right answer!']}
        answer={this.state.question.answer}
        onSuccess={this.showNextQuestion}
        />
}
