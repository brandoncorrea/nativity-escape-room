import { Component } from "react";
import StoreContext from "./Store";

const ANSWER = 'god wanted jesus to have a humble birth so that we would know that it is important to be humble like him'

const errorMessages = [
  "Hmm... that doesn't seem quite right.",
  "The contraption jiggles, but nothing happens.",
  "Maybe we ought to retrace our steps.",
  "Plant City, Florida? I wonder if they had that in Jesus' time...",
  "What kind of language is this‽"
]

export default class Mystery3 extends Component {
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
      this.context.answerMystery3()
    else
      this.setState({error: this.randomError()})
  }

  render = () => 
    <div className="container text-center mt-3">
      <h2>Mystery 3</h2>
      <p className="lead">Where will a prince be born?</p>
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
