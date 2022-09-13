import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Generations from './components/Generations';
import Generation1 from './components/generations/Generation1';
import Generation2 from './components/generations/Generation2';
import Generation3 from './components/generations/Generation3';
import Generation4 from './components/generations/Generation4';
import Generation5 from './components/generations/Generation5';
import Generation6 from './components/generations/Generation6';
import Generation7 from './components/generations/Generation7';
import Generation8 from './components/generations/Generation8';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Generations />} />
        <Route path="/Generation1" element={<Generation1 />} />
        <Route path="/Generation2" element={<Generation2 />} />
        <Route path="/Generation3" element={<Generation3 />} />
        <Route path="/Generation4" element={<Generation4 />} />
        <Route path="/Generation5" element={<Generation5 />} />
        <Route path="/Generation6" element={<Generation6 />} />
        <Route path="/Generation7" element={<Generation7 />} />
        <Route path="/Generation8" element={<Generation8 />} />
      </Routes>
    </div>
  );
}

export default App;
