import { Component } from "react";
import StoreContext from "./Store";

const ANSWER = 'god is the creator of every star he brings out the starry hosts one by one and calls forth each one by name'

const errorMessages = [
  "Hmm... that doesn't seem quite right.",
  "The contraption jiggles, but nothing happens.",
  "Maybe we ought to retrace our steps.",
  "I don't think they had GPS back then..."
]

export default class Mystery4 extends Component {
  static contextType = StoreContext

  constructor(props) {
    super(props)
    this.state = {
      answer: ''
    }
  }

  randomError = () => {
    let choices = errorMessages.filter(i => i !== this.state.error)
    let choice = Math.floor(Math.random() * choices.length)
    return choices[choice]
  }
  
  plainAnswer = () => this.state.answer.toLowerCase().replace(/\s\s+/g, ' ').replace(/[^a-z\s]/g, '').trim()
  onTextChange = e => this.setState({ answer: e.target.value })
  onSolveClicked = () => {
    let answer = this.plainAnswer()
    if (answer === ANSWER)
      this.context.answerMystery4()
    else
      this.setState({error: this.randomError()})
  }

  render = () => 
    <div className="container text-center mt-3">
      <h2>Mystery 4</h2>
      <p className="lead">How did the Wise Men know where to go?</p>
      <div className="mb-3">
        <textarea className="form-control" onChange={this.onTextChange} value={this.state.answer}></textarea>
      </div>
      {
        this.state.error &&
        <h4 className="text-danger mb-3">{this.state.error}</h4>
      }
      {
        this.plainAnswer() &&
        <div className="d-grid mb-3">
          <button className="btn btn-primary" type="button" onClick={this.onSolveClicked}>Solve</button>
        </div>
      }
    </div>
}
