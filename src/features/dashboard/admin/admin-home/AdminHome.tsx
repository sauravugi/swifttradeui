import { NavLink, Outlet } from "react-router-dom";
import "./AdminHome.css";
import { ADMIN_URLS } from "../admin-urls.ts";

export function AdminHome() {
  return (
    <div className="admin-home">
      <nav className="admin-navbar">
        <ul>

          <li>
            <NavLink
              to={ADMIN_URLS.ADMIN_HOME_INBOUND_MESSAGES}
              className={({ isActive }) =>
                `menu-item-home ${isActive ? "active" : ""}`
              }
            >
              Inbound Messages
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ADMIN_URLS.ADMIN_HOME_UPLOAD_SWIFT}
              className={({ isActive }) =>
                `menu-item-home ${isActive ? "active" : ""}`
              }
            >
              Upload Swift File
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ADMIN_URLS.ADMIN_HOME_UPLOAD_ACK}
              className={({ isActive }) =>
                `menu-item-home ${isActive ? "active" : ""}`
              }
            >
              Upload ACK File
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ADMIN_URLS.ADMIN_HOME_BANK_DETAILS}
              className={({ isActive }) =>
                `menu-item-home ${isActive ? "active" : ""}`
              }
            >
              Bank Details
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ADMIN_URLS.ADMIN_HOME_OUTBOUND_MESSAGES}
              className={({ isActive }) =>
                `menu-item-home ${isActive ? "active" : ""}`
              }
            >
              Outbound Messages
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ADMIN_URLS.ADMIN_HOME_ACTIVEMQ_MESSAGES}
              className={({ isActive }) =>
                `menu-item-home ${isActive ? "active" : ""}`
              }
            >
              ActiveMQ Messages
            </NavLink>
          </li>

        </ul>
      </nav>

      <div className="admin-home-content">
        <Outlet />
      </div>

    </div>
  );
}