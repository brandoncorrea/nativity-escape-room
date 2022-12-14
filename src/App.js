import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import EscapePin from './EscapePin'
import FinalChallenge from './FinalChallenge'
import Home from './Home';
import KingdomKeys from './KingdomKeys';
import Mystery1 from './Mystery1';
import Mystery2 from './Mystery2';
import Mystery3 from './Mystery3';
import Mystery4 from './Mystery4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mystery-1" element={<Mystery1 />} />
            <Route path="/mystery-2" element={<Mystery2 />} />
            <Route path="/mystery-3" element={<Mystery3 />} />
            <Route path="/mystery-4" element={<Mystery4 />} />
            <Route path="/escape-pin" element={<EscapePin />} />
            <Route path="/final-challenge" element={<FinalChallenge />} />
            <Route path="/kingdom-keys" element={<KingdomKeys />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
