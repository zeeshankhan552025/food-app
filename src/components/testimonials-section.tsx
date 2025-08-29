import "../component-styles/testimonials-section.css";

export function TestimonialsSection() {
  const testimonials = [
    { text: "Diam sit eos tellus amet justo erat sed sed. Diam lorem sed dolor amet amet volutpat amet lorem diam.", clientName: "Client Name", designation: "Designation", avatar: "/testo-one.svg", isHighlighted: false },
    { text: "Diam sit eos tellus amet justo erat sed sed. Diam lorem sed dolor amet amet volutpat amet lorem diam.", clientName: "Client Name", designation: "Designation", avatar: "/testo-two.svg", isHighlighted: true },
    { text: "Diam sit eos tellus amet justo erat sed sed. Diam lorem sed dolor amet amet volutpat amet lorem diam.", clientName: "Client Name", designation: "Designation", avatar: "/testo-three.svg", isHighlighted: false },
  ];

  return (
    <section className="testimonials-section" aria-labelledby="testimonials-heading">
      <div className="testimonials-inner">
        <div className="testimonials-shell">
          <header className="testimonials-head">
            <p className="testimonials-eyebrow">Testimonial</p>
            <h2 id="testimonials-heading" className="testimonials-title">Our Clients Say!!!</h2>
          </header>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <article key={i} className={`testimonial-card ${t.isHighlighted ? 'highlight' : ''}`}>                
                <p className="testimonial-text">{t.text}</p>
                <div className="client">
                  <img src={t.avatar || '/placeholder.svg'} alt={t.clientName} className="client-avatar" />
                  <div>
                    <h3 className="client-name">{t.clientName}</h3>
                    <p className="client-role">{t.designation}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
