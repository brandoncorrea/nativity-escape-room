import { Component } from "react"
import StoreContext from './Store'

export default class Home extends Component {
  static contextType = StoreContext

  onStartClicked = () => this.context.startEscapeRoom()

  render = () =>
    <div className="container text-center mt-3">
      <div className="mb-5">
        <h1>Your Mission: Shed Light on the Mysteries</h1>
        <p className="lead">Jesus said <strong><i>You are the light of the world.</i></strong> It is our job to understand God's Word so we can defend it!</p>
      </div>
      <div className="mb-5">
        <h3>The Mysteries</h3>
        <p className="lead">Mysteries #1, #2, #3, and #4, will introduce you to people, places, and events at that time and place in the Bible. Each mystery will raise a question you need to answer.</p>
      </div>
      <div className="mb-5">
        <h3>The Decoder</h3>
        <p className="lead">Visit the decoder for each mystery and <strong><i>shed your light</i></strong> (solve the mystery)!</p>
      </div>
      <div>
        <p>
          When you have <strong><i>shed light</i></strong> on the 4 <strong><i>mysteries</i></strong> and obtained the 4-digit <strong><i>key code</i></strong>, you will be given your symbolic <strong><i>key to the Kingdom of Heaven</i></strong>!
        </p>
        <p>Go forth, shedding light to a world filled with darkness, obtaining keys to the Kingdom!</p>
      </div>
      <div className="d-grid mb-5">
        <button className="btn btn-primary" onClick={this.onStartClicked}>Let's Get Started!</button>
      </div>
    </div>
}
