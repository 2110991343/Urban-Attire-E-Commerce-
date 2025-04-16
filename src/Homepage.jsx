// Homepage.jsx
import React from 'react';
import './styles/Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Urban Attire</h1>
          <p className="tagline">Sustainable comfort for everyday life</p>
          <div className="cta-buttons">
            <button className="primary-btn">Shop Men</button>
            <button className="primary-btn">Shop Women</button>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1625204614387-6509254d5b02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Sustainable sneakers" 
          />
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Shop Our Favorites</h2>
        <div className="product-grid">
          <div className="product-card">
            <div className="product-image">
              <img 
                src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80" 
                alt="Eco Comfort Sneaker" 
              />
            </div>
            <h3>Eco Comfort Sneaker</h3>
            <p>$95</p>
            <span className="color-options">4 Colors</span>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img 
                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80" 
                alt="Wool Runner" 
              />
            </div>
            <h3>Wool Runner</h3>
            <p>$110</p>
            <span className="color-options">6 Colors</span>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img 
                src="https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="Tree Lounger" 
              />
            </div>
            <h3>Tree Lounger</h3>
            <p>$98</p>
            <span className="color-options">3 Colors</span>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img 
                src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80" 
                alt="Urban Hiker" 
              />
            </div>
            <h3>Urban Hiker</h3>
            <p>$135</p>
            <span className="color-options">2 Colors</span>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="materials">
        <h2>Better Materials, Better Planet</h2>
        <div className="materials-grid">
          <div className="material-card">
            <div className="material-icon wool">
              <img 
                src="https://images.unsplash.com/photo-1574871786514-46e1680ea587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80" 
                alt="Premium Wool" 
              />
            </div>
            <h3>Premium Wool</h3>
            <p>Soft, temperature-regulating, and naturally moisture-wicking.</p>
          </div>
          <div className="material-card">
            <div className="material-icon tree">
              <img 
                src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80" 
                alt="Eucalyptus Fiber" 
              />
            </div>
            <h3>Eucalyptus Fiber</h3>
            <p>Light, breathable fabric made from sustainably harvested trees.</p>
          </div>
          <div className="material-card">
            <div className="material-icon sugar">
              <img 
                src="https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80" 
                alt="SweetFoam™" 
              />
            </div>
            <h3>SweetFoam™</h3>
            <p>Our revolutionary soles made from sugarcane-based green EVA.</p>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="sustainability">
        <div className="sustainability-content">
          <h2>Our Commitment</h2>
          <p>We're committed to making products that are better for you and the planet. From materials to manufacturing, we're reducing our carbon footprint every step of the way.</p>
          <button className="secondary-btn">Learn More</button>
        </div>
        <div className="sustainability-image">
          <img 
            src="https://images.unsplash.com/photo-1550399504-8953e1a6ac87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Sustainability" 
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-slider">
          <div className="testimonial">
            <div className="stars">★★★★★</div>
            <p>"Most comfortable shoes I've ever worn. And I feel good knowing they're better for the planet."</p>
            <p className="customer-name">- Jamie T.</p>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="instagram">
        <h2>@UrbanAttire</h2>
        <div className="instagram-grid">
          <div className="instagram-post">
            <img 
              src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
              alt="Instagram post" 
            />
          </div>
          <div className="instagram-post">
            <img 
              src="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
              alt="Instagram post" 
            />
          </div>
          <div className="instagram-post">
            <img 
              src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
              alt="Instagram post" 
            />
          </div>
          <div className="instagram-post">
            <img 
              src="https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
              alt="Instagram post" 
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-sections">
          <div className="footer-section">
            <h3>Shop</h3>
            <ul>
              <li>Men</li>
              <li>Women</li>
              <li>Accessories</li>
              <li>Gift Cards</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li>Our Story</li>
              <li>Sustainability</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Help</h3>
            <ul>
              <li>FAQs</li>
              <li>Returns & Exchanges</li>
              <li>Shipping</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Stay Updated</h3>
            <div className="newsletter">
              <input type="email" placeholder="Your email" />
              <button className="sign-up-btn">Sign Up</button>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>© 2025 Urban Attire. All Rights Reserved.</p>
          <div className="footer-links">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;