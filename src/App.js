import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/Index'; 
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">

    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
