import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Tapedeck from './components/Tapedeck';
import CastSolutions from './components/CastSolutions';

function App() {
  return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/tapedeck" element={<Tapedeck />} />
                <Route path="/cast-solutions" element={<CastSolutions />} />
            </Routes>
        </Router>
  );
}

export default App;
