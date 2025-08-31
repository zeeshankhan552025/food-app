import "../component-styles/about-section.css";

export function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-inner">
        {/* Image Grid */}
        <div className="about-images">
          <div className="stack">
            <img
              src="/about-one.svg"
              alt="Restaurant interior"
            />
            <img
              src="/about-two.svg"
              alt="Chef preparing food"
            />
          </div>
          <div className="stack offset">
            <img
              src="/about-three.svg"
              alt="Restaurant dining room"
            />
            <img
              src="/about-four.svg"
              alt="Gourmet food dish"
            />
          </div>
        </div>

        {/* Content */}
        <div className="about-content">
            <div>
              <div className="about-eyebrow-container">
                <div className="about-line"></div>
                <p className="about-label">About Us</p>
                <div className="about-line"></div>
              </div>
              <h2 className="about-title">
                Welcome to <span><img src="/about-logo.svg" alt="" /></span> Restoran
              </h2>
            </div>

            <div className="about-text">
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et
                lorem et sit, sed stet lorem sit.
              </p>
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
                ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
            </div>

            <div className="about-stats">
              <div className="about-stat">
                <div className="about-stat-number">15</div>
                <div className="about-stat-separator"></div>
                <div className="about-stat-label">
                  <div>Years of</div>
                  <div><strong>EXPERIENCE</strong></div>
                </div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">50</div>
                <div className="about-stat-separator"></div>
                <div className="about-stat-label">
                  <div>Popular</div>
                  <div><strong>MASTER CHEFS</strong></div>
                </div>
              </div>
            </div>

            <button className="btn about-more" type="button">READ MORE</button>
        </div>
      </div>
    </section>
  )
}
