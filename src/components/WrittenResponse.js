import { Component } from "react"
import Modal from 'react-bootstrap/Modal';

export default class WrittenResponse extends Component {

  constructor(props) {
    super(props)
    this.state = {
      answer: '',
      showModal: false
    }
  }

  handleClose = () => this.setState({showModal: false})
  handleShowModal = () => this.setState({showModal: true})

  randomError = () => {
    let choices = this.props.errorMessages.filter(i => i !== this.state.error)
    let choice = Math.floor(Math.random() * choices.length)
    return choices[choice]
  }
  
  plainAnswer = () => this.state.answer.toLowerCase().replace(/\s\s+/g, ' ').replace(/[^a-z\s]/g, '').trim()
  onTextChange = e => this.setState({ answer: e.target.value })
  onSolveClicked = () =>
    this.plainAnswer() === this.props.answer ?
      this.props.onSuccess() :
      this.setState({error: this.randomError()})

  render = () => 
    <div className="container text-center mt-3">
      <div className="question-title d-inline-flex">
        <h1>{this.props.title}</h1>
        {
          this.props.hint &&
          <i className="fa-solid fa-circle-question" onClick={this.handleShowModal}></i>
        }
      </div>
      <p className="lead">{this.props.question}</p>
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

      <Modal
        centered
        show={this.state.showModal}
        onHide={this.handleClose}>
        <Modal.Body>
          <p className="text-center">{this.props.hint}</p>
          <div className="d-grid mb-3">
            <button className="btn btn-primary" type="button" onClick={this.handleClose}>Close</button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
}
