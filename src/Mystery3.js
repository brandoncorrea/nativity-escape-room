import { Component } from "react";
import WrittenResponse from "./components/WrittenResponse";
import StoreContext from "./Store";

export default class Mystery3 extends Component {
  static contextType = StoreContext

  render = () => 
    <WrittenResponse
      title="Mystery 3"
      question="Where will a prince be born?"
      errorMessages={[
        "Hmm... that doesn't seem quite right.",
        "The contraption jiggles, but nothing happens.",
        "Maybe we ought to retrace our steps.",
        "Plant City, Florida? I wonder if they had that in Jesus' time...",
        "What kind of language is this‽"
      ]}
      answer={'god wanted jesus to have a humble birth so that we would know that it is important to be humble like him'}
      onSuccess={this.context.answerMystery3}
      />
}
