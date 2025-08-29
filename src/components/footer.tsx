import "../component-styles/footer.css";

export function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <p className="footer-copy">© Your Site Name. All Rights Reserved.</p>
        <nav aria-label="Footer navigation" className="footer-nav">
          <a href="/" className="footer-link">Home</a>
          <a href="/contact" className="footer-link">Contact</a>
        </nav>
      </div>
      <button className="fab" aria-label="Back to top" onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}>↑</button>
    </footer>
  );
}
