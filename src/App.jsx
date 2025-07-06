import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Counter from './components/Counter';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Counter />} />
      </Routes>
    </Router>
  );
}

export default App;
