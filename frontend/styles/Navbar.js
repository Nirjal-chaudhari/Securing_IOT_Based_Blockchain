import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from './Link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-4'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-xl flex items-center">
              <span className="text-emerald-400 mr-1">Block</span>
              <span className="text-blue-400">IoT</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            <Link to="/transactions" className="nav-link">Transactions</Link>
            <Link to="/features" className="nav-link">Features</Link>
            <Link to="/about" className="nav-link">About</Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-4 space-y-1 bg-slate-800 shadow-lg">
          <Link to="/" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/dashboard" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Dashboard</Link>
          <Link to="/transactions" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Transactions</Link>
          <Link to="/features" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Features</Link>
          <Link to="/about" className="mobile-nav-link" onClick={() => setIsOpen(false)}>About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
