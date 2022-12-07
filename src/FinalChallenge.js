import { Fragment } from "react";

const questions = [
  {
    id: 1,
    text: "Isaiah prophesied the virgin birth in this year:", 
    answer: 1,
    options: [
      {id: 1, value: "750 BC"},
      {id: 2, value: "725 BC"},
      {id: 3, value: "700 BC"},
      {id: 4, value: "675 BC"}
    ]
  },
  {
    id: 2,
    text: "The first known person to prophesy about the coming Messiah is this famous Old Testament character:",
    answer: 1,
    options: [
      {id: 1, value: "Adam"},
      {id: 2, value: "Noah"},
      {id: 3, value: "Abraham"},
      {id: 4, value: "Moses"}
    ]
  },
  {
    id: 3,
    text: "Joseph married Mary even though she was pregnant because an angel:",
    answer: 3,
    options: [
      {id: 1, value: "appeared in a burning bush"},
      {id: 2, value: "appeared in a field by night"},
      {id: 3, value: "appeared in a dream"}
    ]
  },
  {
    id: 4,
    text: "The name for an animal feed trough that held baby Jesus is:",
    answer: "manger",
  },
  {
    id: 5,
    text: "Another name for Bethlehem was used by the angels who appeared to the shepherds. They called Bethlehem:",
    answer: 3,
    options: [
      {id: 1, value: "City of Light"},
      {id: 2, value: "City of Angels"},
      {id: 3, value: "Town of David"},
      {id: 4, value: "Town of Micah"}
    ]
  },
  {
    id: 6,
    text: "Herod's counselors checked a certain Bible verse to tell the Magi where the Messia would be born. That verse is:",
    answer: 3,
    options: [
      {id: 1, value: "John 3:16"},
      {id: 2, value: "Revelation 22:1"},
      {id: 3, value: "Micah 5:2"},
      {id: 4, value: "Isaiah 53:5"}
    ]
  }
]

function createRadioOption(questionId, option) {
  let inputId = `${questionId}-${option.id}`
  return (
    <div key={option.id} className="btn">
      <input type="radio" className="btn-check" id={inputId} name={questionId} value={option.id} autoComplete="off" />
      <label className="btn btn-outline-success" htmlFor={inputId}>{option.value}</label>
    </div>)
}

function createQuestionInput (id, options) {
  let questionId = `question-${id}`
  return options ?
    options.map(option => createRadioOption(questionId, option)) :
    <input className="form-control" type="text" name={questionId} />
}

const FinalChallenge = () =>
  <div className="container text-center">
    <h1 className="m-4">Final Challenge</h1>
    {
      questions.map(({id, text, answer, options}) => 
        <Fragment key={id}>
          <label className="form-label h5">{text}</label>
          <div key={id} className="mb-5">{createQuestionInput(id, options)}</div>
        </Fragment>)
    }
  </div>;

export default FinalChallenge;
