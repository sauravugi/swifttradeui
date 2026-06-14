import { NavLink, Outlet } from "react-router-dom";
import "./MessageLogs.css";
import { ADMIN_URLS } from "../admin-urls";

export function MessageLogs() {
  return (
    <div className="message-logs">

      <nav className="message-navbar">
        <ul>

          <li>
            <NavLink
              to={ADMIN_URLS.MESSAGE_LOGS_GENERIC}
              className={({ isActive }) =>
                `menu-item-message ${isActive ? "active" : ""}`
              }
            >
              Generic Message Logs
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ADMIN_URLS.MESSAGE_LOGS_INBOUND}
              className={({ isActive }) =>
                `menu-item-message ${isActive ? "active" : ""}`
              }
            >
              Inbound Message Logs
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ADMIN_URLS.MESSAGE_LOGS_OUTBOUND}
              className={({ isActive }) =>
                `menu-item-message ${isActive ? "active" : ""}`
              }
            >
              Outbound Message Logs
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ADMIN_URLS.MESSAGE_LOGS_ADMIN}
              className={({ isActive }) =>
                `menu-item-message ${isActive ? "active" : ""}`
              }
            >
              Admin Message Logs
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ADMIN_URLS.MESSAGE_LOGS_EMAIL}
              className={({ isActive }) =>
                `menu-item-message ${isActive ? "active" : ""}`
              }
            >
              Email Logs
            </NavLink>
          </li>

        </ul>
      </nav>

      <div className="message-logs-content">
        <Outlet />
      </div>

    </div>
  );
}