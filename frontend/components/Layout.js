import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-logo">
          {/* IoT Logo - Image in public folder */}
          <img src="/go2.jpg" alt="IoT Logo" className="logo-img" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/transactions">Transactions</Link></li>
          <li><Link to="/Dashboard">Dashboard</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
