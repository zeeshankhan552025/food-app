import "../component-styles/menu-section.css";
import { useState } from "react";

type MenuItem = { id: number; name: string; description: string; price: string; image: string; category: Category };
type Category = "breakfast" | "lunch" | "dinner";

const baseItems: MenuItem[] = [
  { id: 1, name: "Chicken Burger", description: "lorem ipsum cillra erat amet dolor justo diam", price: "$115", image: "/chicken-burger-one.svg", category: "breakfast" },
  { id: 2, name: "Chicken Burger", description: "lorem ipsum cillra erat amet dolor justo diam", price: "$115", image: "/chicken-burger-two.svg", category: "breakfast" },
  { id: 3, name: "Chicken Burger", description: "lorem ipsum cillra erat amet dolor justo diam", price: "$115", image: "/chicken-burger-three.svg", category: "breakfast" },
  { id: 4, name: "Chicken Burger", description: "lorem ipsum cillra erat amet dolor justo diam", price: "$115", image: "/chicken-burger-four.svg", category: "lunch" },
  { id: 5, name: "Chicken Burger", description: "lorem ipsum cillra erat amet dolor justo diam", price: "$115", image: "/chicken-burger-five.svg", category: "lunch" },
  { id: 6, name: "Chicken Burger", description: "lorem ipsum cillra erat amet dolor justo diam", price: "$115", image: "/chicken-burger-six.svg", category: "lunch" },
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
          <p className="subtitle">Food Menu</p>
            <h2 id="menu-heading" className="title">Most Popular Items</h2>
          <div className="menu-tabs" aria-label="Menu categories" role="tablist">
            <button
              type="button"
              className={`tab ${category === "breakfast" ? "is-active" : ""}`.trim()}
              role="tab"
              aria-selected={category === "breakfast"}
              onClick={() => setCategory("breakfast")}
            >
              <span className="emoji" aria-hidden="true"><img src="/menu-icon-one.svg" alt="" /></span>Popular Breakfast
            </button>
            <button
              type="button"
              className={`tab ${category === "lunch" ? "is-active" : ""}`.trim()}
              role="tab"
              aria-selected={category === "lunch"}
              onClick={() => setCategory("lunch")}
            >
              <span className="emoji" aria-hidden="true"><img src="/menu-icon-two.svg" alt="" /></span>Popular Lunch
            </button>
            <button
              type="button"
              className={`tab ${category === "dinner" ? "is-active" : ""}`.trim()}
              role="tab"
              aria-selected={category === "dinner"}
              onClick={() => setCategory("dinner")}
            >
              <span className="emoji" aria-hidden="true"><img src="/menu-icon-three.svg" alt="" /></span>Popular Dinner
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
