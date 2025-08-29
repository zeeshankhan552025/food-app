// Using native CSS (see component-styles/header.css) instead of Tailwind utilities
import "../component-styles/header.css";

export function Header() {
  return (
    <header className="site-header" role="banner">
      <div className="nav-inner">
        <a href="/" className="brand" aria-label="FoodFront home">
          <span  aria-hidden="true">
        <img src="/app-logo.svg" alt="" />
          </span>
          <span className="brand-name">FoodFront</span>
        </a>

        <nav className="primary-nav" aria-label="Main navigation">
          <ul className="nav-list">
            <li><a href="/" className="nav-link is-active">Home</a></li>
            <li><a href="/contact" className="nav-link">Contact</a></li>
            <li>
              <a href="#reservation" className="cta-btn">Book A Table</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
