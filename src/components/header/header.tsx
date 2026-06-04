import "./Header.css";

export default function Header() {
  return (
    <header className="app-header">
      {/* LEFT SECTION */}
      <div className="header-left">
        <img
          src="/st_logo.png"
          alt="SwiftTrade"
          className="header-logo"
        />

        <div className="header-text">
          <h1 className="company-name">
            SwiftTrade
          </h1>
          <p className="company-tagline">
            Trade Finance Platform
          </p>
        </div>
      </div>

      {/* CENTER NAV (future use) */}
      <nav className="header-nav">
        <a href="#">Dashboard</a>
        <a href="#">LC</a>
        <a href="#">Guarantee</a>
        <a href="#">Reports</a>
      </nav>

      {/* RIGHT SECTION */}
      <div className="header-right">
        <button className="login-btn">
          Login
        </button>
      </div>
    </header>
  );
}