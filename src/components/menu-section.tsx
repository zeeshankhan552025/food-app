import "../component-styles/menu-section.css";

export function MenuSection() {
  const menuItems = [
    {
      id: 1,
      name: "Chicken Burger",
      description: "lorem ipsum cillra erat amet dolor justo diam",
      price: "$115",
      image: "/chicken-burger-one.svg",
    },
    {
      id: 2,
      name: "Chicken Burger",
      description: "lorem ipsum cillra erat amet dolor justo diam",
      price: "$115",
      image: "/chicken-burger-two.svg",
    },
    {
      id: 3,
      name: "Chicken Burger",
      description: "lorem ipsum cillra erat amet dolor justo diam",
      price: "$115",
      image: "/chicken-burger-three.svg",
    },
    {
      id: 4,
      name: "Chicken Burger",
      description: "lorem ipsum cillra erat amet dolor justo diam",
      price: "$115",
      image: "/chicken-burger-four.svg",
    },
    {
      id: 5,
      name: "Chicken Burger",
      description: "lorem ipsum cillra erat amet dolor justo diam",
      price: "$115",
      image: "/chicken-burger-five.svg",
    },
    {
      id: 6,
      name: "Chicken Burger",
      description: "lorem ipsum cillra erat amet dolor justo diam",
      price: "$115",
      image: "/chicken-burger-six.svg",
    },
    {
      id: 7,
      name: "Chicken Burger",
      description: "lorem ipsum cillra erat amet dolor justo diam",
      price: "$115",
      image: "/chicken-burger-seven.svg",
    },
    {
      id: 8,
      name: "Chicken Burger",
      description: "lorem ipsum cillra erat amet dolor justo diam",
      price: "$115",
      image: "/chicken-burger-eight.svg",
    },
  ]

  return (
    <section className="section-menu" aria-labelledby="menu-heading">
      <div className="inner">
        <div className="section-head">
          <p className="subtitle">Food Menu</p>
          <h2 id="menu-heading" className="title">Most Popular Items</h2>
          {/* Future filter tabs */}
          <div className="menu-tabs" aria-label="Menu categories" role="tablist" hidden>
            <button className="tab is-active" role="tab" aria-selected="true"><span className="emoji"><img src="/menu-one.svg" alt="" /></span>Popular Breakfast</button>
            <button className="tab" role="tab" aria-selected="false"><span className="emoji"><img src="/menu-two.svg" alt="" /></span>Popular Lunch</button>
            <button className="tab" role="tab" aria-selected="false"><span className="emoji"><img src="/menu-three.svg" alt="" /></span>Popular Dinner</button>
          </div>
        </div>
        <div className="menu-grid">
          {menuItems.map(item => (
            <div key={item.id} className="menu-card">
              <div className="thumb">
                <img src={item.image || "/placeholder.svg"} alt={item.name} />
              </div>
              <div className="info">
                <h3 className="name">{item.name}</h3>
                <p className="desc">{item.description}</p>
              </div>
              <div className="price" aria-label="Price">{item.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
