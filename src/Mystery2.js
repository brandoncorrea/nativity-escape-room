import { Component } from "react";
import StoreContext from "./Store";

const ANSWER = 'the angel gabriel'

const errorMessages = [
  "Hmm... that doesn't seem quite right.",
  "The contraption jiggles, but nothing happens.",
  "Maybe we ought to retrace our steps.",
  "Was it Adam? Moses? No, no... that doesn't sound right.",
  "Dot dash... no wait, dash dot? Dot dot dash dot dash?"
]

export default class Mystery2 extends Component {
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
      this.context.answerMystery2()
    else
      this.setState({error: this.randomError()})
  }

  render = () => 
    <div className="container text-center mt-3">
      <h2>Mystery 2</h2>
      <p className="lead">Who visited Mary and Why?</p>
      <div className="mb-3">
        {/* {
          [["–", "....", "."],
            [".–", "–.", "––.", ".", ".–.."],
            ["––.", ".–", "–...", ".–.", "..", ".", ".–.."]]
            .map(codes =>
            <div className="row mb-3">
              {
                codes.map(code =>
                  <div className="col">
                    <input type="text" className="form-control text-center" maxLength="1" placeholder={code} />
                  </div>)
              }
            </div>
            )
        } */}
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
