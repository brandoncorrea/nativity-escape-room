import { Component } from "react"
import Navigator from "./Navigator"
import Store from "./Store"

export default class KingdomKeys extends Component {
  startOver() {
    Store.clear()
    Navigator.home()
  }

  render = () =>
    <div className="container text-center">
      <p className="lead">You've obtained the Keys to the Kingdom of Heaven!</p>
      <button className="btn btn-primary" onClick={this.startOver}>Start Over</button>
    </div>
}
