import React from 'react';
import './styles/aboutus.css';
import { Link } from 'react-router-dom';


const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Navigation Banner */}
      <div className="utility-banner">
        <p>Sustainable Products For A Better Tomorrow <span>|</span> Shop Men <span>|</span> Shop Women</p>
        <button className="banner-arrow">→</button>
      </div>

      {/* Main Navigation */}
      <nav className="main-nav">
        <div className="nav-categories">
          <a href="#men">MEN</a>
          <a href="#women">WOMEN</a>
          <a href="#sustainable">SUSTAINABILITY</a>
          <a href="#new">NEW ARRIVALS</a>
        </div>
        <div className="logo">
          <h1>Urban Attire</h1>
        </div>
        <div className="nav-icons">
          <button className="icon-btn search">🔍</button>
          <button className="icon-btn account">👤</button>
          <button className="icon-btn help">❓</button>
          <button className="icon-btn cart">🛒</button>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <a href="#home">Home</a> / <span>About Us</span>
      </div>

      {/* Page Title */}
      <div className="page-title">
        <h1>Our Story</h1>
      </div>

      {/* About Us Content */}
      <div className="about-content">
        <div className="about-section">
          <div className="about-image">
            <img src="/api/placeholder/600/400" alt="Our mission" />
          </div>
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              Founded in 2023, ecoSteps was born from a simple question: why weren't there more footwear options that were both stylish and sustainable? We set out to create shoes that people would love wearing while reducing our environmental footprint.
            </p>
            <p>
              Our commitment goes beyond just making great products. We believe in responsible manufacturing, ethical sourcing, and creating a positive impact on the planet and communities we serve.
            </p>
          </div>
        </div>

        <div className="about-section reverse">
          <div className="about-image">
            <img src="/api/placeholder/600/400" alt="Sustainable materials" />
          </div>
          <div className="about-text">
            <h2>Sustainable Materials</h2>
            <p>
              Every ecoSteps product is made with carefully selected materials that minimize environmental impact. From recycled plastic bottles to natural rubber and organic cotton, we scrutinize every component to ensure it aligns with our sustainability goals.
            </p>
            <p>
              We're constantly innovating - researching new materials and methods to create products that are better for you and better for the planet.
            </p>
          </div>
        </div>

        <div className="about-section">
          <div className="about-image">
            <img src="/api/placeholder/600/400" alt="Carbon footprint" />
          </div>
          <div className="about-text">
            <h2>Carbon Neutral Commitment</h2>
            <p>
              We measure the carbon footprint of everything we make, from raw materials to manufacturing and shipping. Then we offset 100% of our emissions through verified carbon projects, making our business completely carbon neutral.
            </p>
            <p>
              But we're not stopping there. Our goal is to continue reducing our emissions year after year, working toward a future where offsetting isn't necessary.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <div className="cta-content">
          <h2>Join Our Journey</h2>
          <p>Experience comfort, style, and sustainability with every step.</p>
          <div className="cta-buttons">
          <Link to="/mens-products">
  <button className="cta-btn">SHOP MEN</button>
</Link>

          
            <button className="cta-btn">SHOP WOMEN</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-sections">
          <div className="footer-section">
            <h3>Help</h3>
            <ul>
              <li><a href="#faq">FAQs</a></li>
              <li><a href="#returns">Returns & Exchanges</a></li>
              <li><a href="#shipping">Shipping</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>About</h3>
            <ul>
              <li><a href="#mission">Our Mission</a></li>
              <li><a href="#materials">Materials</a></li>
              <li><a href="#sustainability">Sustainability</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Connect</h3>
            <ul>
              <li><a href="#instagram">Instagram</a></li>
              <li><a href="#twitter">Twitter</a></li>
              <li><a href="#facebook">Facebook</a></li>
              <li><a href="#pinterest">Pinterest</a></li>
            </ul>
          </div>
          <div className="footer-section newsletter">
            <h3>Newsletter</h3>
            <p>Sign up to receive updates on new products and more.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button>→</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 ecoSteps, Inc. All Rights Reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Use</a>
            <a href="#accessibility">Accessibility</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;