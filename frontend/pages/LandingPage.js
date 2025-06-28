import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';


const LandingPage = () => {
  return (
    <div className="landing-container">
      

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Securing IoT Data with Blockchain</h1>
          <p className="hero-subtitle">
            Harnessing the power of decentralized technology to protect IoT data
          </p>
          <a href="#features" className="cta-btn">Discover More</a>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="feature-item">
          <h2>Blockchain Security</h2>
          <p>Utilize Ethereum's decentralized network to securely store IoT data.</p>
        </div>
        <div className="feature-item">
          <h2>Real-time Data</h2>
          <p>Get real-time updates on IoT sensor data, securely stored on IPFS.</p>
        </div>
        <div className="feature-item">
          <h2>Easy Integration</h2>
          <p>Seamlessly integrate IoT devices with blockchain and IPFS for data integrity.</p>
        </div>
        <div className="feature-item">
          <h2>Decentralized Storage</h2>
          <p>Removing centralized reliability</p>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <div className="video-wrapper">
          <video autoPlay muted loop>
            <source src="/iotvideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Securing IoT Data Project | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default LandingPage;
