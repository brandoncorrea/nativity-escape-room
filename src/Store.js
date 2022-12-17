import React, { Component } from "react"

const questions = [
  {
    id: 1,
    text: "Isaiah prophesied the virgin birth in this year:", 
    answer: 1,
    options: [
      {value: 1, label: "750 BC"},
      {value: 2, label: "725 BC"},
      {value: 3, label: "700 BC"},
      {value: 4, label: "675 BC"}
    ]
  },
  {
    id: 2,
    text: "The first known person to prophesy about the coming Messiah is this famous Old Testament character:",
    answer: 4,
    options: [
      {value: 1, label: "Adam"},
      {value: 2, label: "Noah"},
      {value: 3, label: "Abraham"},
      {value: 4, label: "Moses"}
    ]
  },
  {
    id: 3,
    text: "Joseph married Mary even though she was pregnant because an angel:",
    answer: 3,
    options: [
      {value: 1, label: "appeared in a burning bush"},
      {value: 2, label: "appeared in a field by night"},
      {value: 3, label: "appeared in a dream"}
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
      {value: 1, label: "City of Light"},
      {value: 2, label: "City of Angels"},
      {value: 3, label: "Town of David"},
      {value: 4, label: "Town of Micah"}
    ]
  },
  {
    id: 6,
    text: "Herod's counselors checked a certain Bible verse to tell the Magi where the Messia would be born. That verse is:",
    answer: 3,
    options: [
      {value: 1, label: "John 3:16"},
      {value: 2, label: "Revelation 22:1"},
      {value: 3, label: "Micah 5:2"},
      {value: 4, label: "Isaiah 53:5"}
    ]
  }
]

const get = key => localStorage.getItem(key)
const set = (key, value) => localStorage.setItem(key, value)

const StoreContext = React.createContext()

function initStore () {
  let store
  try {
    store = JSON.parse(get('store')) || {}
  } catch { 
    store = {} 
  }
  return typeof store === 'object' ? store : {}
}

class StoreProvider extends Component {
  state = initStore()
  
  savePinEntry = () => this.setStore({ pinEnteredCorrectly: true })
  answerMystery1 = () => this.setStore({ answeredMystery1: true })
  answerMystery2 = () => this.setStore({ answeredMystery2: true })
  answerMystery3 = () => this.setStore({ answeredMystery3: true })
  answerMystery4 = () => this.setStore({ answeredMystery4: true })
  answerMysteryQuestion1 = () => this.setStore({ answeredMysteryQuestion1: true })
  answerMysteryQuestion2 = () => this.setStore({ answeredMysteryQuestion2: true })
  answerMysteryQuestion3 = () => this.setStore({ answeredMysteryQuestion3: true })
  answerMysteryQuestion4 = () => this.setStore({ answeredMysteryQuestion4: true })
  startEscapeRoom = () => this.setStore({ escapeRoomStarted: true })
  setFinalChallengeQuestionNumber = n => this.setStore({ finalChallengeQuestion: n })
  getFinalChallengeQuestion = n => questions[n]
  finalChallengeComplete = () => this.finalChallengeQuestionNumber() >= questions.length
  currentFinalChallengeQuestion = () => this.getFinalChallengeQuestion(this.finalChallengeQuestionNumber())

  setStore = store => {
    let newState = {...this.state, ...store}
    set('store', JSON.stringify(newState))
    this.setState(newState)
  }

  clear = () => {
    let state = {
      finalChallengeQuestion: 0,
      pinEnteredCorrectly: false,
      answeredMystery1: false,
      answeredMystery2: false,
      answeredMystery3: false,
      answeredMystery4: false,
      answeredMysteryQuestion1: false,
      answeredMysteryQuestion2: false,
      answeredMysteryQuestion3: false,
      answeredMysteryQuestion4: false,
      escapeRoomStarted: false
    }
    set('store', JSON.stringify(state))
    this.setState(state)
  }

  finalChallengeQuestionNumber = () => {
    let question = parseInt(this.state.finalChallengeQuestion)
    return isNaN(question) ? 0 : question
  }

  render() {
    const { children } = this.props

    return (
      <StoreContext.Provider value={{ ...this.state, ...this }}>
        { children }
      </StoreContext.Provider>
    )
  }
}

export default StoreContext
export { StoreProvider }
