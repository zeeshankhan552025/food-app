import "../component-styles/contact-section.css";

export function ContactSection() {
  return (
    <section className="contact-section" aria-labelledby="contact-heading">
      <div className="contact-wrapper">
        <header className="contact-head">
          <div className="contact-eyebrow-container">
            <div className="contact-line"></div>
            <p className="contact-eyebrow">Contact Us</p>
            <div className="contact-line"></div>
          </div>
          <h2 id="contact-heading" className="contact-title">Contact For Any Query</h2>
          <div className="contact-info-grid">
            <div className="contact-info-item">
              <div className="contact-info-label-container">
                <p className="contact-info-label">Booking</p>
                <div className="contact-info-line"></div>
              </div>
              <p className="contact-info-value">booking@example.com</p>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-label-container">
                <p className="contact-info-label">General</p>
                <div className="contact-info-line"></div>
              </div>
              <p className="contact-info-value">general@example.com</p>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-label-container">
                <p className="contact-info-label">Technical</p>
                <div className="contact-info-line"></div>
              </div>
              <p className="contact-info-value">tech@example.com</p>
            </div>
          </div>
        </header>
        <div className="contact-layout">
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1234567890123"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant Location"
              aria-label="Map showing restaurant location"
            />
          </div>
          <form className="contact-form" aria-label="Contact form">
            <div className="contact-form-row">
              <input type="text" name="name" placeholder="Your Name" required className="field-input" />
              <input type="email" name="email" placeholder="Your Email" required className="field-input" />
            </div>
            <input type="text" name="subject" placeholder="Subject" required className="field-input" />
            <textarea name="message" placeholder="Message" rows={6} required className="field-textarea" />
            <button type="submit" className="contact-submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
