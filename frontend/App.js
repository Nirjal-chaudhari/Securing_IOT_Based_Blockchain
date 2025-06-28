import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Features from './pages/Features';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Transaction from './pages/TransactionsPage'; // Import the TransactionPage
import Layout from './components/Layout'; // Import Layout component

function App() {
  return (
    <Router>
      <Layout>  {/* Wrap Routes with Layout to show the navigation bar */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transaction/>} />
          <Route path="/features" element={<Features/>} />
          <Route path="/About" element={<About/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
