import "../component-styles/chefs-section.css";

export function ChefsSection() {
  const chefs = [
    { id: 1, name: "Full Name", designation: "Designation", image: "/chef-one.svg" },
    { id: 2, name: "Full Name", designation: "Designation", image: "/chef-two.svg" },
    { id: 3, name: "Full Name", designation: "Designation", image: "/chef-three.svg" },
    { id: 4, name: "Full Name", designation: "Designation", image: "/chef-four.svg" },
  ];

  return (
    <section className="chefs-section" aria-labelledby="chefs-heading">
      <div className="chefs-wrapper">
        <header className="chefs-head">
          <div className="chefs-eyebrow-container">
            <div className="chefs-line"></div>
            <p className="chefs-eyebrow">Team Members</p>
            <div className="chefs-line"></div>
          </div>
          <h2 id="chefs-heading" className="chefs-title">Our Master Chefs</h2>
        </header>
        <ul className="chefs-grid">
          {chefs.map(chef => (
            <li key={chef.id} className="chef-card">
              <figure className="chef-figure">
                <div className="chef-photo-wrap">
                  <img src={chef.image || "/placeholder.svg"} alt={chef.name} loading="lazy" />
                </div>
              </figure>
              <h3 className="chef-name">{chef.name}</h3>
              <p className="chef-role">{chef.designation}</p>
              <ul className="social-list" aria-label="Social links" role="list">
                <li> <img src="/fb-icon.svg" alt="" /> </li>
                <li> <img src="/x.svg" alt="" /> </li>
                <li> <img src="/insta.svg" alt="" /> </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
