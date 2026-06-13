import { NavLink, Outlet } from "react-router-dom";
import "./AdminHome.css";

export function AdminHome() {
  return (
    <div className="admin-home">

      {/* NAVBAR */}
      <nav className="admin-navbar">
        <ul>

          <li>
            <NavLink
              to="inbound-messages"
              end
              className={({ isActive }) =>
                `menu-item-home ${isActive ? "active" : ""}`
              }
            >
              Inbound Messages
            </NavLink>
          </li>

          <li>
            <NavLink
              to="upload-swift-file"
              className={({ isActive }) =>
                `menu-item-home ${isActive ? "active" : ""}`
              }
            >
              Upload Swift File
            </NavLink>
          </li>

          <li>
            <NavLink
              to="upload-ack-file"
              className={({ isActive }) =>
                `menu-item-home ${isActive ? "active" : ""}`
              }
            >
              Upload ACK File
            </NavLink>
          </li>

          <li>
            <NavLink
              to="bank-details"
              className={({ isActive }) =>
                `menu-item-home ${isActive ? "active" : ""}`
              }
            >
              Bank Details
            </NavLink>
          </li>

          <li>
            <NavLink
              to="outbound-messages"
              className={({ isActive }) =>
                `menu-item-home ${isActive ? "active" : ""}`
              }
            >
              Outbound Messages
            </NavLink>
          </li>

          <li>
            <NavLink
              to="activemq-messages"
              className={({ isActive }) =>
                `menu-item-home ${isActive ? "active" : ""}`
              }
            >
              ActiveMQ Messages
            </NavLink>
          </li>

        </ul>
      </nav>

      {/* CONTENT */}
      <div className="admin-home-content">
        <Outlet />
      </div>

    </div>
  );
}