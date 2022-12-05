import { Component } from "react";

class EscapePin extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      pin1 : '',
      pin2 : '',
      pin3 : '',
      pin4 : ''
    }

    this.onChangeInput = this.onChangeInput.bind(this)
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

  render = () =>
    <div className="container text-center">
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
        <div className="d-grid">
          <button id="escape-button" className="btn btn-primary" type="button">Escape!</button>
        </div>
      }
    </div>
}

export default EscapePin;