import { Component } from "react"
import StoreContext from './Store'
import WrittenResponse from './components/WrittenResponse'

export default class Mystery1 extends Component {
  static contextType = StoreContext

  render = () => 
    <WrittenResponse 
      title="Mystery 1"
      question="How did the Old Testament prophets know Jesus was coming?"
      errorMessages={[
        "Hmm... that doesn't seem quite right.",
        "The contraption jiggles, but nothing happens.",
        "Maybe we ought to retrace our steps.",
        "How did the prophets know‽"
      ]}
      answer={'if god wants someone to be a prophet he will come in a vision or speak in a dream'}
      onSuccess={this.context.answerMystery1}
      />
}
