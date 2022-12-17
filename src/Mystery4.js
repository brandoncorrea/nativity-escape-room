import { Component } from "react";
import MultipleChoice from "./components/MultipleChoice";
import WrittenResponse from "./components/WrittenResponse";
import StoreContext from "./Store";

export default class Mystery4 extends Component {
  static contextType = StoreContext

  render = () =>
    this.context.answeredMysteryQuestion4 ?
      <WrittenResponse
        title="Mystery 4"
        question="How did the Wise Men know where to go?"
        hint={"The wise men came\nbefore Herod wanted to kill the baby boys.\nTo find your next key,\nsearch somewhere among the toys."}
        errorMessages={[
          "Hmm... that doesn't seem quite right.",
          "The contraption jiggles, but nothing happens.",
          "Maybe we ought to retrace our steps.",
          "I don't think they had GPS back then..."
        ]}
        answer={'god is the creator of every star he brings out the starry hosts one by one and calls forth each one by name'}
        onSuccess={this.context.answerMystery4}
        /> :
      <MultipleChoice
        id="mystery-4-choice"
        title="Mystery 4"
        answer={4}
        options={[
          {label: "2", value: 1},
          {label: "3", value: 2},
          {label: "12", value: 3},
          {label: "nobody knows", value: 4}
        ]}
        onSuccess={this.context.answerMysteryQuestion4}
        question={'How many Magi were there?'}
        />
        
}
