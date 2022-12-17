import { Component } from "react";
import MultipleChoice from "./components/MultipleChoice";
import WrittenResponse from "./components/WrittenResponse";
import StoreContext from "./Store";

export default class Mystery2 extends Component {
  static contextType = StoreContext

  render = () => 
    this.context.answeredMysteryQuestion2 ?
      <WrittenResponse
        title="Mystery 2"
        question="Who visited Mary and Why?"
        hint= {"He was born in the stable\non that special night.\nWhen you find that spot,\nthe key is in plain sight."}
        errorMessages={[
          "Hmm... that doesn't seem quite right.",
          "The contraption jiggles, but nothing happens.",
          "Maybe we ought to retrace our steps.",
          "Was it Adam? Moses? No, no... that doesn't sound right.",
          "Dot dash... no wait, dash dot? Dot dot dash dot dash?"
        ]}
        answer={'the angel gabriel'}
        onSuccess={this.context.answerMystery2}
        /> :
      <MultipleChoice
        id="mystery-2-choice"
        title="Mystery 2"
        answer={4}
        options={[
          {label: "Greetings!", value: 1},
          {label: "Don't be scared of me", value: 2},
          {label: "Call your baby Jesus", value: 3},
          {label: "All three", value: 4}
        ]}
        onSuccess={this.context.answerMysteryQuestion2}
        question={'What did the angel say?'}
        />
}
