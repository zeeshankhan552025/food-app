import "../component-styles/reservation-section.css";

export function ReservationSection() {
  return (
    <section id="reservation" className="reservation-section" aria-labelledby="reservation-heading">
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
            <p className="reservation-eyebrow">Reservation</p>
            <h2 id="reservation-heading" className="reservation-title">Book A Table Online</h2>
          </header>
          <form className="reservation-form" aria-describedby="reservation-heading">
            <div className="form-row">
              <div className="field">
                <label htmlFor="res-name" className="visually-hidden">Your Name</label>
                <span className="icon" aria-hidden="true">{userIcon}</span>
                <input id="res-name" name="name" type="text" placeholder="Your Name" required />
              </div>
              <div className="field">
                <label htmlFor="res-email" className="visually-hidden">Your Email</label>
                <span className="icon" aria-hidden="true">{mailIcon}</span>
                <input id="res-email" name="email" type="email" placeholder="Your Email" required />
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label htmlFor="res-datetime" className="visually-hidden">Date & Time</label>
                <span className="icon" aria-hidden="true">{calendarIcon}</span>
                <input id="res-datetime" name="datetime" type="datetime-local" placeholder="Date & Time" required />
              </div>
              <div className="field">
                <label htmlFor="res-people" className="visually-hidden">Number of People</label>
                <span className="icon" aria-hidden="true">{usersIcon}</span>
                <select id="res-people" name="people" defaultValue="1">
                  <option value="1">People 1</option>
                  <option value="2">People 2</option>
                  <option value="3">People 3</option>
                  <option value="4">People 4</option>
                  <option value="5">People 5</option>
                  <option value="6">People 6+</option>
                </select>
              </div>
            </div>
            <div className="field field-textarea">
              <label htmlFor="res-request" className="visually-hidden">Special Request</label>
              <span className="icon" aria-hidden="true">{messageIcon}</span>
              <textarea id="res-request" name="request" placeholder="Special Request" rows={4}></textarea>
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

// Inline SVG icons (avoids extra dependencies)
const iconProps = {
  width: 20,
  height: 20,
  stroke: 'currentColor',
  fill: 'none',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const userIcon = (
  <svg {...iconProps} viewBox="0 0 24 24"><path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5Z" /><path d="M3 22c0-4.418 4.03-8 9-8s9 3.582 9 8" /></svg>
);
const mailIcon = (
  <svg {...iconProps} viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z" /><path d="m22 6-10 7L2 6" /></svg>
);
const calendarIcon = (
  <svg {...iconProps} viewBox="0 0 24 24"><path d="M8 2v4" /><path d="M16 2v4" /><rect x="3" y="6" width="18" height="16" rx="2" /><path d="M3 10h18" /></svg>
);
const usersIcon = (
  <svg {...iconProps} viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
);
const messageIcon = (
  <svg {...iconProps} viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-4.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" /></svg>
);
