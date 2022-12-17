import { Component } from "react"
import StoreContext from './Store'
import WrittenResponse from './components/WrittenResponse'
import MultipleChoice from "./components/MultipleChoice"

export default class Mystery1 extends Component {
  static contextType = StoreContext

  render = () => 
    this.context.answeredMysteryQuestion1 ?
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
        /> :
      <MultipleChoice
        id="mystery-1-choice"
        title="Mystery 1"
        answer={4}
        options={[
          {label: "Iraq", value: 1},
          {label: "Iran", value: 2},
          {label: "Babylon", value: 3},
          {label: "Egypt", value: 4}
        ]}
        onSuccess={this.context.answerMysteryQuestion1}
        question={'The prophet Hosea accurately predicted that the Messiah would spend time in this country:'}
        />
}
