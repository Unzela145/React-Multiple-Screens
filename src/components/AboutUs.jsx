import React from 'react';
import './AboutUs.css'; // Make sure to add styling for this component

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <h1 className="about-us-title">About Us</h1>
        <p className="about-us-subtitle">Discover who we are, our mission, and our values.</p>
      </header>

      <section className="mission-section">
        <h2 className="section-title">Our Mission</h2>
        <p className="mission-description">
          Our company is dedicated to providing innovative solutions and exceptional services to
          our customers. We believe in fostering a culture of trust, creativity, and excellence, aiming to
          make a positive impact in the industry and in the communities we serve.
        </p>
      </section>

      <section className="team-section">
        <h2 className="section-title">Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="src\assets\pic2.jpg" alt="Team Member" className="team-member-img" />
            <h3 className="team-member-name">Unzela Sheikh</h3>
            <p className="team-member-role">CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="src\assets\pic1.jpg" alt="Team Member" className="team-member-img" />
            <h3 className="team-member-name">Rida Khan</h3>
            <p className="team-member-role">Lead Developer</p>
          </div>
          <div className="team-member">
            <img src="src\assets\pic3.jpg" alt="Team Member" className="team-member-img" />
            <h3 className="team-member-name">Nimra Rasool</h3>
            <p className="team-member-role">Marketing Director</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-description">
          We would love to hear from you! If you have any questions or want to know more about our services,
          feel free to reach out to us.
        </p>
        <button className="contact-btn">Contact Us</button>
      </section>

      <footer className="about-us-footer">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
