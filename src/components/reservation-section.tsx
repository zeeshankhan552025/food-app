import { useState } from 'react';
import "../component-styles/reservation-section.css";

type FormData = {
  name: string;
  email: string;
  datetime: string;
  people: string;
  request: string;
};

type FormErrors = {
  [K in keyof FormData]?: string;
};

export function ReservationSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    datetime: '',
    people: '',
    request: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [showPopup, setShowPopup] = useState(false);

  const validateForm = (data: FormData): FormErrors => {
    const newErrors: FormErrors = {};

    if (!data.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!data.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!data.datetime) {
      newErrors.datetime = 'Date and time is required';
    } else {
      const selectedDate = new Date(data.datetime);
      const now = new Date();
      if (selectedDate <= now) {
        newErrors.datetime = 'Please select a future date and time';
      }
    }

    if (!data.people) {
      newErrors.people = 'Number of people is required';
    }

    return newErrors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = validateForm(formData);
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Show success popup
    setShowPopup(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      datetime: '',
      people: '',
      request: ''
    });
    setErrors({});

    // Auto-hide popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };
  return (
    <section id="reservation" className="reservation-section" aria-labelledby="reservation-heading">
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Reservation Confirmed!</h3>
            <p>Thank you for your reservation. We'll contact you shortly to confirm the details.</p>
          </div>
        </div>
      )}
      <div className="reservation-wrapper">
        <figure className="reservation-image">
          <img
            src="/reservation.svg"
            alt="Couple enjoying dinner at restaurant"
            loading="lazy"
          />
        </figure>
        <div className="reservation-form-panel">
          <header className="reservation-head">
            <div className="reservation-eyebrow-container">
              <p className="reservation-eyebrow">Reservation</p>
              <div className="reservation-line"></div>
            </div>
            <h2 id="reservation-heading" className="reservation-title">Book A Table Online</h2>
          </header>
          <form className="reservation-form" aria-describedby="reservation-heading" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field">
                <label htmlFor="res-name" className="visually-hidden">Your Name</label>
                <input 
                  id="res-name" 
                  name="name" 
                  type="text" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && <span id="name-error" className="error-message">{errors.name}</span>}
              </div>
              <div className="field">
                <label htmlFor="res-email" className="visually-hidden">Your Email</label>
                <input 
                  id="res-email" 
                  name="email" 
                  type="email" 
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && <span id="email-error" className="error-message">{errors.email}</span>}
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label htmlFor="res-datetime" className="visually-hidden">Date & Time</label>
                <input 
                  id="res-datetime" 
                  name="datetime" 
                  type="datetime-local" 
                  placeholder="Date & Time" 
                  value={formData.datetime}
                  onChange={handleInputChange}
                  aria-describedby={errors.datetime ? "datetime-error" : undefined}
                />
                {errors.datetime && <span id="datetime-error" className="error-message">{errors.datetime}</span>}
              </div>
              <div className="field">
                <label htmlFor="res-people" className="visually-hidden">Number of People</label>
                <select 
                  id="res-people" 
                  name="people" 
                  value={formData.people}
                  onChange={handleInputChange}
                  aria-describedby={errors.people ? "people-error" : undefined}
                >
                  <option value="">No Of People</option>
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5">5 People</option>
                  <option value="6">6 People</option>
                  <option value="7">7 People</option>
                  <option value="8">8 People</option>
                  <option value="9">9 People</option>
                  <option value="10">10+ People</option>
                </select>
                {errors.people && <span id="people-error" className="error-message">{errors.people}</span>}
              </div>
            </div>
            <div className="field field-textarea">
              <label htmlFor="res-request" className="visually-hidden">Special Request</label>
              <textarea 
                id="res-request" 
                name="request" 
                placeholder="Special Request" 
                rows={4}
                value={formData.request}
                onChange={handleInputChange}
              />
            </div>
            <div className="actions">
              <button type="submit" className="reservation-submit">Book Now</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
