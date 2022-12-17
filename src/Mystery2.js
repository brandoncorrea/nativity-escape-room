import { Component } from "react";
import WrittenResponse from "./components/WrittenResponse";
import StoreContext from "./Store";

export default class Mystery2 extends Component {
  static contextType = StoreContext

  render = () => 
    <WrittenResponse
      title="Mystery 2"
      question="Who visited Mary and Why?"
      errorMessages={[
        "Hmm... that doesn't seem quite right.",
        "The contraption jiggles, but nothing happens.",
        "Maybe we ought to retrace our steps.",
        "Was it Adam? Moses? No, no... that doesn't sound right.",
        "Dot dash... no wait, dash dot? Dot dot dash dot dash?"
      ]}
      answer={'the angel gabriel'}
      onSuccess={this.context.answerMystery2}
      />
}
