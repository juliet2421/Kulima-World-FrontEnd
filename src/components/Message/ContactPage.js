import React, { useState } from "react";
import "./App.css";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    setSubmitted(true);
    // For now, just log the form data (Replace with actual backend integration)
    console.log({ name, email, phone, message });
  };

  return (
    <div className="full-screen-container contact-container">
      <div className="contact-card">
        <h2 className="contact-header">Contact Us</h2>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </div>

            {/* Phone */}
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="Enter your phone number"
              />
            </div>

            {/* Message */}
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Enter your message"
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="contact-button">
              Submit
            </button>
          </form>
        ) : (
          <div className="thank-you-message">
            <h3>Thank you for contacting us!</h3>
            <p>We will get back to you shortly.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
