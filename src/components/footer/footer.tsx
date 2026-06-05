import "./footer.css";

export default function Footer() {
  return (
    <footer className="app-footer">
          <div className="footer-left">
            © 2026 SwiftTrade. All Rights Reserved.
          </div>

          <div className="footer-center">
            <div className="contact-details">
              <span>Email -: sauravugi@gmail.com</span>
              <span>Mobile: +91 79865 96057</span>
            </div>
          </div>

          <div className="footer-right">
            <span>Trade Finance Platform</span>

            <span>v1.0.0</span>
          </div>
        </footer>
  );
}