import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import Orders from './pages/Orders';
import Fleet from './pages/Fleet';
import Sourcing from './pages/Sourcing';
import Finance from './pages/Finance';
import Manufacturing from './pages/Manufacturing';
import Communication from './pages/Communication';
import Marketing from './pages/Marketing';
import Projects from './pages/Projects';
import HR from './pages/HR';

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
            <Route path="/finance" element={<Finance />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/communication" element={<Communication />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/hr" element={<HR />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;