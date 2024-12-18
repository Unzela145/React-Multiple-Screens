import React, { useState } from 'react';
import './ContactUs.css'; // Make sure to add the appropriate styles

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to an API)
    alert('Message sent!');
  };

  return (
    <div className="contact-us-container">
      {/* Header Section */}
      <header className="contact-us-header">
        <h1 className="contact-us-title">Contact Us</h1>
        <p className="contact-us-subtitle">
          We’d love to hear from you! Get in touch with us today.
        </p>
      </header>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <h2 className="section-title">Send Us a Message</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">Your Message</label>
            <textarea
              id="message"
              name="message"
              className="form-input"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section">
        <h2 className="section-title">Our Contact Information</h2>
        <div className="contact-info">
          <p><strong>Email:</strong> contact@yourcompany.com</p>
          <p><strong>Phone:</strong> +1 234 567 890</p>
          <p><strong>Address:</strong> 123 Your Street, City, Country</p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="contact-us-footer">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default ContactUs;
