import "./header.css";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routeConstants";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { logout } from "../../features/auth/authSlice";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { IconButton, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export default function Header() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const isAuthenticated = useAppSelector( (state) => state.auth.isAuthenticated );
    const [username, setUsername] = useState("");
    const [clientName, setClientName] = useState("");
    const [currentTime, setCurrentTime] = useState(new Date());
    const token = useAppSelector((state) => state.auth.token);

    useEffect(() => {
      if (token) {
        try {
          const payload: any = jwtDecode(token);

          setUsername(payload.username || "");
          setClientName(payload.clientName || "");
        } catch (e) {
          console.error("Token decode failed", e);
        }
      } else {
        setUsername("");
        setClientName("");
      }
    }, [token]);

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
      return () => clearInterval(timer);
    }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("token");

    dispatch(logout());

    navigate(ROUTES.LOGIN, {
      replace: true,
    });
  };

  return (
    <header className="app-header">
      <img
        src="/st_logo.png"
        alt="SwiftTrade"
        className="header-logo"
      />

      <div className="header-right">
        <div className="header-text">
          <h1 className="company-name">
            SwiftTrade
          </h1>

          <p className="company-tagline">
            Trade Finance Platform
          </p>
        </div>

        <div className="header-time-section">
          <span className="header-time">
            {currentTime.toLocaleTimeString(
              "en-IN",
              {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              }
            ).toUpperCase()}
          </span>
          <div className="divider" />
          <span className="header-date">
            {currentTime.toLocaleDateString(
              "en-IN",
              {
                day: "2-digit",
                month: "short",
                year: "numeric",
              }
            )}
          </span>
        </div>

        {isAuthenticated && (
            <div className="header-user-section">
                <div className="user-info">
                  <span className="user-name">{username}</span>
                  <div className="divider" />
                  <span className="client-name">({clientName})</span>
                </div>

                <Tooltip title="Logout">
                  <IconButton
                    onClick={handleLogout}
                    className="logout-btn"
                  >
                    <LogoutOutlinedIcon />
                  </IconButton>
                </Tooltip>
            </div>
          )}
      </div>
    </header>
  );
}