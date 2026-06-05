import "./header.css";

interface HeaderProps {
  isAuthenticated: boolean;
  onLogout?: () => void;
}

export default function Header({
  isAuthenticated,
  onLogout,
}: HeaderProps) {
  return (
    <header className="app-header">
      {/* LEFT - LOGO */}
      <img
        src="/st_logo.png"
        alt="SwiftTrade"
        className="header-logo"
      />

      {/* RIGHT SIDE */}
      <div className="header-right">
        <div className="header-text">
          <h1 className="company-name">
            SwiftTrade
          </h1>
          <p className="company-tagline">
            Trade Finance Platform
          </p>
        </div>

        {isAuthenticated && (
          <button
            className="logout-btn"
            onClick={onLogout}
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
}