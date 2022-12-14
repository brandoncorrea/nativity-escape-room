import { Component } from "react";
import Navigator from "./Navigator";
import Store from "./Store";

const ANSWER = 'if god wants someone to be a prophet he will come in a vision or speak in a dream'

const errorMessages = [
  "Hmm... that doesn't seem quite right.",
  "The contraption jiggles, but nothing happens.",
  "Maybe we ought to retrace our steps.",
  "How did the prophets know‽"
]

export default class Mystery1 extends Component {

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
    if (answer === ANSWER) {
      Store.answerMystery1(this.state.answer)
      Navigator.navigate('/mystery-2')
    }
    else
      this.setState({error: this.randomError()})
  }

  render = () => 
    <div className="container text-center">
      <h2>Mystery 1</h2>
      <p className="lead">How did the Old Testament prophets know Jesus was coming?</p>
      <div className="mb-3">
        <textarea className="form-control" onChange={this.onTextChange} value={this.state.answer}></textarea>
      </div>
      {
        this.plainAnswer() &&
        <div className="d-grid mb-3">
          <button className="btn btn-primary" type="button" onClick={this.onSolveClicked}>Solve</button>
        </div>
      }
      {
        this.state.error &&
        <p className="text-danger">{this.state.error}</p>
      }
    </div>
}
