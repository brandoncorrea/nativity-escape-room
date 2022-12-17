import React, { Component } from "react"

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
