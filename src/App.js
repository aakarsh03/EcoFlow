import React from 'react';
import './App.css';
import { FaLeaf, FaRecycle, FaGift } from 'react-icons/fa';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Green Path</h1>
        <p>Innovating for a Sustainable Future</p>
        <button className="cta-button">Learn More</button>
      </header>
      
      <main>
        <section className="intro-section">
          <div className="intro-text">
            <h2>Welcome to a Greener Future</h2>
            <p>EcoShip Logistics is dedicated to reducing the environmental impact of e-commerce by leveraging technology and eco-friendly practices.</p>
          </div>
          <img src="eco-friendly-delivery.png" alt="Eco-friendly delivery" className="feature-image" />
        </section>

        <section className="features-section">
          <div className="feature-card">
            <FaLeaf className="feature-icon" />
            <h3>AI-Optimized Packaging</h3>
            <p>Utilize cutting-edge AI to minimize packaging waste while maintaining product safety.</p>
            <button className="feature-button">Explore AI Tech</button>
          </div>
          <div className="feature-card">
            <FaRecycle className="feature-icon" />
            <h3>Recycling Program</h3>
            <p>Join our program to recycle old packaging and contribute to a sustainable future.</p>
            <button className="feature-button">Join the Initiative</button>
          </div>
          <div className="feature-card">
            <FaGift className="feature-icon" />
            <h3>Reward System</h3>
            <p>Earn rewards for taking part in our eco-friendly practices.</p>
            <button className="feature-button">See Rewards</button>
          </div>
        </section>

        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>We aim to implement sustainable strategies that benefit both the planet and our partners:</p>
          <ul>
            <li>Energy-efficient operations</li>
            <li>Eco-friendly packaging solutions</li>
            <li>Customer and employee engagement in sustainability</li>
          </ul>
        </section>
      </main>

      <footer className="app-footer">
        <p>Join us in transforming logistics for a better world.</p>
        <button className="contact-button">Contact Us</button>
        <div className="social-media">
          <button className="social-icon">🔗</button>
          <button className="social-icon">🐦</button>
          <button className="social-icon">📘</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
