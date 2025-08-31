import "../component-styles/menu-section.css";
import { useState } from "react";

type MenuItem = { id: number; name: string; description: string; price: string; image: string; category: Category };
type Category = "breakfast" | "launch" | "dinner";

const baseItems: MenuItem[] = [
  { id: 1, name: "Chicken Burger", description: "lorem ipsum cillra erat amet dolor justo diam", price: "$115", image: "/chicken-burger-one.svg", category: "breakfast" },
  { id: 2, name: "Chicken Burger", description: "lorem ipsum cillra erat amet dolor justo diam", price: "$115", image: "/chicken-burger-two.svg", category: "breakfast" },
  { id: 3, name: "Chicken Burger", description: "lorem ipsum cillra erat amet dolor justo diam", price: "$115", image: "/chicken-burger-three.svg", category: "breakfast" },
  { id: 4, name: "Chicken Burger", description: "lorem ipsum cillra erat amet dolor justo diam", price: "$115", image: "/chicken-burger-four.svg", category: "launch" },
  { id: 5, name: "Chicken Burger", description: "lorem ipsum cillra erat amet dolor justo diam", price: "$115", image: "/chicken-burger-five.svg", category: "launch" },
  { id: 6, name: "Chicken Burger", description: "lorem ipsum cillra erat amet dolor justo diam", price: "$115", image: "/chicken-burger-six.svg", category: "launch" },
  { id: 7, name: "Chicken Burger", description: "lorem ipsum cillra erat amet dolor justo diam", price: "$115", image: "/chicken-burger-seven.svg", category: "dinner" },
  { id: 8, name: "Chicken Burger", description: "lorem ipsum cillra erat amet dolor justo diam", price: "$115", image: "/chicken-burger-eight.svg", category: "dinner" },
];

export function MenuSection() {
  const [category, setCategory] = useState<Category>("breakfast");
  // Show all items instead of filtering by category
  const items = baseItems;

  return (
    <section id="menu" className="section-menu" aria-labelledby="menu-heading">
      <div className="inner">
        <div className="section-head">
          <div className="menu-eyebrow-container">
            <div className="menu-line"></div>
            <p className="subtitle">Food Menu</p>
            <div className="menu-line"></div>
          </div>
            <h2 id="menu-heading" className="title">Most Popular Items</h2>
          <div className="menu-tabs" aria-label="Menu categories" role="tablist">
            <button
              type="button"
              className={`tab ${category === "breakfast" ? "is-active" : ""}`.trim()}
              role="tab"
              aria-selected={category === "breakfast"}
              onClick={() => setCategory("breakfast")}
            >
              <span className="emoji" aria-hidden="true"><img src="/menu-icon-one.svg" alt="" /></span>
              <div className="tab-text">
                <span className="tab-label">Popular</span>
                <span className="tab-category">Breakfast</span>
              </div>
            </button>
            <button
              type="button"
              className={`tab ${category === "launch" ? "is-active" : ""}`.trim()}
              role="tab"
              aria-selected={category === "launch"}
              onClick={() => setCategory("launch")}
            >
              <span className="emoji" aria-hidden="true"><img src="/menu-icon-two.svg" alt="" /></span>
              <div className="tab-text">
                <span className="tab-label">Special</span>
                <span className="tab-category">Launch</span>
              </div>
            </button>
            <button
              type="button"
              className={`tab ${category === "dinner" ? "is-active" : ""}`.trim()}
              role="tab"
              aria-selected={category === "dinner"}
              onClick={() => setCategory("dinner")}
            >
              <span className="emoji" aria-hidden="true"><img src="/menu-icon-three.svg" alt="" /></span>
              <div className="tab-text">
                <span className="tab-label">Lovely</span>
                <span className="tab-category">Dinner</span>
              </div>
            </button>
          </div>
        </div>
        <div className="menu-grid" role="tabpanel" aria-label={`${category} items`}>
          {items.map(item => (
            <div key={item.id} className="menu-card" tabIndex={0}>
              <div className="thumb">
                <img src={item.image || "/placeholder.svg"} alt={item.name} />
              </div>
              <div className="info">
                <div className="name">
                  <span>{item.name}</span>
                  <span className="price">{item.price}</span>
                </div>
                <p className="desc">{item.description}</p>
              </div>
            </div>
          ))}
          {items.length === 0 && <p>No items.</p>}
        </div>
      </div>
    </section>
  );
}
