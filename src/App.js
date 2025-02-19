import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="*" element={
            <div className="h-screen flex items-center justify-center">
              <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;