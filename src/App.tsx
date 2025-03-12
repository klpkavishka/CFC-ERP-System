import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import Orders from './pages/Orders';
import Fleet from './pages/Fleet';
import Sourcing from './pages/Sourcing';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/sourcing" element={<Sourcing />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// man pawan
export default App;