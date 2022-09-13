import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Generations from './components/Generations';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Generations />} />
      </Routes>
    </div>
  );
}

export default App;
