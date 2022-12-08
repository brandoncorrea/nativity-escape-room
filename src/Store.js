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
    answer: 4,
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

export default class Store {
  static get = key => localStorage.getItem(key)
  static set = (key, value) => localStorage.setItem(key, value)
  static clear = () => localStorage.clear()
  static pinEnteredCorrectly = () => this.get('pin-entered-correctly')
  static savePinEntry = () => this.set('pin-entered-correctly', true)
  static incFinalChallengeQuestionNumber = () => this.set('final-challenge-question', Store.finalChallengeQuestionNumber() + 1)
  static finalChallengeQuestion = () => questions[this.finalChallengeQuestionNumber()]
  static finalChallengeQuestionNumber() {
    let question = parseInt(this.get('final-challenge-question'))
    return isNaN(question) ? 0 : question
  }
}
