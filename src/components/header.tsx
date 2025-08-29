// Using native CSS (see component-styles/header.css) instead of Tailwind utilities
import "../component-styles/header.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // Smoothly scroll to an element id (if present)
  const scrollToId = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const goHomeAnd = useCallback((after?: () => void) => {
    if (location.pathname === "/") {
      requestAnimationFrame(() => after && after());
    } else {
      navigate("/", { replace: false, state: { scrollTarget: "menu" } });
      // Fallback if state handling not implemented yet
      setTimeout(() => after && after(), 50);
    }
  }, [location.pathname, navigate]);

  const handleHome = () => {
    // Requirement: Home button scrolls to menu section
    goHomeAnd(() => scrollToId("menu"));
  setMenuOpen(false);
  };

  const handleContact = () => {
    if (location.pathname !== "/contact") navigate("/contact");
  setMenuOpen(false);
  };

  const handleBookTable = () => {
    goHomeAnd(() => scrollToId("reservation"));
  setMenuOpen(false);
  };

  const isContact = location.pathname === "/contact";

  return (
    <header className="site-header" role="banner">
      <div className="nav-inner">
        <button type="button" className="brand brand-button" aria-label="FoodFront home" onClick={handleHome}>
          <span aria-hidden="true">
            <img src="/app-logo.svg" alt="" />
          </span>
          <span className="brand-name">FoodFront</span>
        </button>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <nav className="primary-nav" aria-label="Main navigation" data-open={menuOpen || undefined}>
          <ul className="nav-list">
            <li>
              <button
                type="button"
                onClick={handleHome}
                className={`nav-link ${!isContact ? "is-active" : ""}`.trim()}
                aria-current={!isContact ? "page" : undefined}
              >
                Home
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={handleContact}
                className={`nav-link ${isContact ? "is-active" : ""}`.trim()}
                aria-current={isContact ? "page" : undefined}
              >
                Contact
              </button>
            </li>
            <li>
              <button type="button" className="cta-btn" onClick={handleBookTable}>Book A Table</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
