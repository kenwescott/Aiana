import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';
import Rhino from './Pages/Rhino';
import Elephant from './Pages/Elephant';
import Tiger from './Pages/Tiger';

function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1" style={{ marginLeft: '250px', padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rhino" element={<Rhino/>} />
            <Route path="/elephant"element={<Elephant />} />
            <Route path="/tiger" element={<Tiger />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
