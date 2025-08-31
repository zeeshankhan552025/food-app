import { useState, useEffect } from "react";
import "../component-styles/footer.css";

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user has scrolled down more than 300px
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <p className="footer-copy">© Your Site Name. All Rights Reserved.</p>
        <nav aria-label="Footer navigation" className="footer-nav">
          <span className="footer-text">Home</span>
          <span className="footer-text">Contact</span>
        </nav>
      </div>
      {showScrollTop && (
        <button 
          className="fab" 
          aria-label="Back to top" 
          onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
        >
          ↑
        </button>
      )}
    </footer>
  );
}
