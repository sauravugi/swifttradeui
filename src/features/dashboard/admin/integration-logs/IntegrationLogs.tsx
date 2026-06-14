import { NavLink, Outlet } from "react-router-dom";
import "./IntegrationLogs.css";
import { ADMIN_URLS } from "../admin-urls";

export function IntegrationLogs() {
  return (
    <div className="integration-logs">

      <nav className="integration-navbar">
        <ul>

          <li>
            <NavLink
              to={ADMIN_URLS.API_LOGS}
              className={({ isActive }) =>
                `menu-item-integration ${isActive ? "active" : ""}`
              }
            >
              API Logs
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ADMIN_URLS.SWIFT_LOGS}
              className={({ isActive }) =>
                `menu-item-integration ${isActive ? "active" : ""}`
              }
            >
              SWIFT Logs
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ADMIN_URLS.ACTIVEMQ_LOGS}
              className={({ isActive }) =>
                `menu-item-integration ${isActive ? "active" : ""}`
              }
            >
              ActiveMQ Logs
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ADMIN_URLS.FILE_TRANSFER_LOGS}
              className={({ isActive }) =>
                `menu-item-integration ${isActive ? "active" : ""}`
              }
            >
              File Transfer Logs
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ADMIN_URLS.FAILED_INTEGRATIONS}
              className={({ isActive }) =>
                `menu-item-integration ${isActive ? "active" : ""}`
              }
            >
              Failed Integrations
            </NavLink>
          </li>

        </ul>
      </nav>

      <div className="integration-logs-content">
        <Outlet />
      </div>

    </div>
  );
}