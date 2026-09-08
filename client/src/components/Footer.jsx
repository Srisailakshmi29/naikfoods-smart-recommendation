import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-section footer-brand">
          <h2>Naik Foods</h2>

          <p>
            Discover authentic traditional flavors from
            Vidarbha & Konkan.
          </p>

          <p className="footer-tagline">
            Taste tradition. Discover something delicious.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/quiz">
            Find Your Snack
          </Link>

          <Link to="/cart">
            Shopping Cart
          </Link>
        </div>

        {/* Why Naik Foods */}
        <div className="footer-section">
          <h3>Why Naik Foods?</h3>

          <p>✓ Traditional Products</p>
          <p>✓ Smart Recommendations</p>
          <p>✓ Quality Ingredients</p>
          <p>✓ Convenient Shopping</p>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>

          <p>📧 naikfoods001@gmail.com</p>
          <p>📞 Customer Support</p>
          <p>🕘 Mon - Sat: 9 AM - 8 PM</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">

        <p>
          © 2026 Naik Foods. All rights reserved.
        </p>

        <p>
          Smart Recommendation Prototype
        </p>

      </div>

    </footer>
  );
}

export default Footer;