

const features = [
  {
    icon: "/person.svg",
    title: "Master Chefs",
    description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    highlighted: true,
  },
  {
    icon: "/fork.svg",
    title: "Quality Food",
    description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    highlighted: false,
  },
  {
    icon: "/cart.svg",
    title: "Online Order",
    description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    highlighted: false,
  },
  {
    icon: "/support.svg",
    title: "24/7 Service",
    description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    highlighted: false,
  },
]

export function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-wrapper">
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className={`feature-card ${feature.highlighted ? 'highlighted' : ''}`}>
                <div className="feature-icon">
                  <img src={feature.icon} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
import "../component-styles/features-section.css";
