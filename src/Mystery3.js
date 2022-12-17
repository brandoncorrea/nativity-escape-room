import { Component } from "react";
import MultipleChoice from "./components/MultipleChoice";
import WrittenResponse from "./components/WrittenResponse";
import StoreContext from "./Store";

export default class Mystery3 extends Component {
  static contextType = StoreContext

  render = () => 
    this.context.answeredMysteryQuestion3 ?
      <WrittenResponse
        title="Mystery 3"
        question="Where will a prince be born?"
        hint={"You're so close to being free...\nor maybe it's a trap!\nTo find your next key,\nyou need to make (or unmake) a \"rap\"."}
        errorMessages={[
          "Hmm... that doesn't seem quite right.",
          "The contraption jiggles, but nothing happens.",
          "Maybe we ought to retrace our steps.",
          "Plant City, Florida? I wonder if they had that in Jesus' time...",
          "What kind of language is this‽"
        ]}
        answer={'god wanted jesus to have a humble birth so that we would know that it is important to be humble like him'}
        onSuccess={this.context.answerMystery3}
        /> :
      <MultipleChoice
        id="mystery-3-choice"
        title="Mystery 3"
        answer={4}
        options={[
          {label: "Mary had baby clothes", value: 1},
          {label: "Mary had a crib", value: 2},
          {label: "Mary was freezing cold", value: 3},
          {label: "There was no room at the inn", value: 4}
        ]}
        onSuccess={this.context.answerMysteryQuestion3}
        question={'Which is true?'}
        />
}
