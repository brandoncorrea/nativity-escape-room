import { Component } from "react";

export default class MultipleChoice extends Component {

  constructor(props) {
    super(props)
    this.state = {
      answer: '',
      error: ''
    }

    this.timeoutUser = this.timeoutUser.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  onValueChange = answer => this.setState({ answer })
  correctlyAnswered = () => this.state.answer === this.props.answer

  timeoutUser() {
    this.setState({error: "That was not the right answer!"})
    if (!this.state.timer) {
      let timer = setInterval(this.countDown, 1000);
      this.setState({timer, seconds: 30})
    }
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
      this.props.onSuccess() :
      this.timeoutUser()

  render = () =>
    <div className="container text-center mt-3">
      <h1>{this.props.title}</h1>
      <label className="form-label h5">{this.props.question}</label>
      <div className="mb-3">
        {
          this.props.options.map(({label, value}, index) =>
            <div key={value} className="btn">
              <input
                type="radio"
                className="btn-check"
                id={`question-${this.props.id}-${index}`}
                name={`question-${this.props.id}`}
                value={value}
                checked={this.state.answer === value}
                onChange={() => this.onValueChange(value)}
                autoComplete="off" />
              <label
                className="btn btn-outline-success"
                htmlFor={`question-${this.props.id}-${index}`}>
                  {label}
              </label>
            </div>)
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
