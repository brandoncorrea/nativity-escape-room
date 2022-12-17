import { Component } from 'react';
import './App.css';
import EscapePin from './EscapePin'
import FinalChallenge from './FinalChallenge'
import Home from './Home';
import KingdomKeys from './KingdomKeys';
import Mystery1 from './Mystery1';
import Mystery2 from './Mystery2';
import Mystery3 from './Mystery3';
import Mystery4 from './Mystery4';
import StoreContext from './Store';

export default class App extends Component {
  static contextType = StoreContext

  render = () => 
    <div className="App">
      <header className="App-header">
        {
          this.context.pinEnteredCorrectly ? <KingdomKeys /> :
          this.context.finalChallengeComplete() ? <EscapePin /> :
          this.context.answeredMystery4 ? <FinalChallenge /> :
          this.context.answeredMystery3 ? <Mystery4 /> :
          this.context.answeredMystery2 ? <Mystery3 /> :
          this.context.answeredMystery1 ? <Mystery2 /> :
          this.context.escapeRoomStarted ? <Mystery1 /> :
          <Home />
        }
      </header>
    </div>
}
