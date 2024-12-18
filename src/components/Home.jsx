import React from 'react';
import './Home.css'; // Assuming you'll add styles for Home page

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-title">Welcome to Our Home Page</h1>
        <p className="home-description">
          Discover the latest updates, features, and insights on our website.
          We aim to provide you with the best content and services.
        </p>
      </header>

      <section className="features">
        <h2 className="features-title">What We Offer</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Latest Blogs</h3>
            <p>Stay updated with the most recent articles on various topics.</p>
          </div>
          <div className="feature-card">
            <h3>Exclusive Offers</h3>
            <p>Access special discounts and offers only available on our website.</p>
          </div>
          <div className="feature-card">
            <h3>Get in Touch</h3>
            <p>Contact us for any queries or support. We're here to help you!</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <p>Sign up today and join our community for exclusive content and updates!</p>
        <button className="cta-button">Sign Up</button>
      </section>

      <footer className="home-footer">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
