import { Component } from "react";
import Navigator from "./Navigator";
import Store from "./Store";

export default class EscapePin extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      pin1 : '',
      pin2 : '',
      pin3 : '',
      pin4 : '',
    }

    if (Store.pinEnteredCorrectly()) Navigator.finalChallenge()
    this.onChangeInput = this.onChangeInput.bind(this)
    this.submitAnswer = this.submitAnswer.bind(this)
  }

  onChangeInput = e => {
    let {id, value} = e.target
    if (!this.isNumberOrBlank(e.target.value)) return
    this.setState(this.getUpdates(id, value))
    let focusId = this.nextFocusId(id, value)
    if (focusId) document.getElementById(focusId).focus()
  }

  isNumberOrBlank = value =>
    value === '' || (!isNaN(value) && value.trim())

  getUpdates = (id, value) =>
    id === 'pin-1' ? {pin1: value} :
    id === 'pin-2' ? {pin2: value} :
    id === 'pin-3' ? {pin3: value} :
    {pin4: value}

  nextFocusId = (id, value) =>
    (id === 'pin-1' ? !value : !this.state.pin1) ? 'pin-1' :
    (id === 'pin-2' ? !value : !this.state.pin2) ? 'pin-2' :
    (id === 'pin-3' ? !value : !this.state.pin3) ? 'pin-3' :
    (id === 'pin-4' ? !value : !this.state.pin4) ? 'pin-4' :
    null

  hasEnteredPin = () => this.state.pin1 && this.state.pin2 && this.state.pin3 && this.state.pin4

  submitAnswer() {
    let answer = `${this.state.pin1}${this.state.pin2}${this.state.pin3}${this.state.pin4}`
    if (answer === '6153') {
      Store.savePinEntry()
      Navigator.finalChallenge()
    }
    else
      this.setState({error: 'Incorrect Combination!'})
  }

  render = () =>
    <div className="container text-center">
      <p className="lead">Enter the 4-digit code to escape</p>
      <div className="row mb-3">
        <div className="col">
          <input id="pin-1" type="text" className="form-control text-center" maxLength="1" inputMode="numeric" onChange={this.onChangeInput} value={this.state.pin1} />
        </div>
        <div className="col">
          <input id="pin-2" type="text" className="form-control text-center" maxLength="1" inputMode="numeric" onChange={this.onChangeInput} value={this.state.pin2} />
        </div>
        <div className="col">
          <input id="pin-3" type="text" className="form-control text-center" maxLength="1" inputMode="numeric" onChange={this.onChangeInput} value={this.state.pin3}/>
        </div>
        <div className="col">
          <input id="pin-4" type="text" className="form-control text-center" maxLength="1" inputMode="numeric" onChange={this.onChangeInput} value={this.state.pin4}/>
        </div>
      </div>
      {
        this.hasEnteredPin() &&
        <div className="d-grid mb-3">
          <button id="escape-button" className="btn btn-primary" type="button" onClick={this.submitAnswer}>Escape!</button>
        </div>
      }
      {
        this.state.error &&
        <p className="text-danger">{this.state.error}</p>
      }
    </div>
}
