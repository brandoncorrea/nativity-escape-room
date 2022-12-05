import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import EscapePin from './EscapePin'
import FinalChallenge from './FinalChallenge'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<EscapePin />} />
            <Route path="/final-challenge" element={<FinalChallenge />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
