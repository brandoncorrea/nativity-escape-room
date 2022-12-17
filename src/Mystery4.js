import { Component } from "react";
import WrittenResponse from "./components/WrittenResponse";
import StoreContext from "./Store";

export default class Mystery4 extends Component {
  static contextType = StoreContext

  render = () => 
    <WrittenResponse
      title="Mystery 4"
      question="How did the Wise Men know where to go?"
      errorMessages={[
        "Hmm... that doesn't seem quite right.",
        "The contraption jiggles, but nothing happens.",
        "Maybe we ought to retrace our steps.",
        "I don't think they had GPS back then..."
      ]}
      answer={'god is the creator of every star he brings out the starry hosts one by one and calls forth each one by name'}
      onSuccess={this.context.answerMystery4}
      />
}
