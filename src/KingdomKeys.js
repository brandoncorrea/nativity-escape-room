import { Component } from "react"
import StoreContext from "./Store"

export default class KingdomKeys extends Component {
  static contextType = StoreContext

  startOver = () => this.context.clear()

  render = () =>
    <div className="container text-center">
      <p className="lead">You've obtained the Keys to the Kingdom of Heaven!</p>
      <button className="btn btn-primary" onClick={this.startOver}>Start Over</button>
    </div>
}
