import { NavLink, Outlet } from "react-router-dom";
import "./BusinessReports.css";
import { ADMIN_URLS } from "../admin-urls";

export function BusinessReports() {
  return (
    <div className="business-reports">

      <nav className="reports-navbar">
        <ul>

          <li>
            <NavLink
              to={ADMIN_URLS.TRANSACTION_REPORTS}
              className={({ isActive }) =>
                `menu-item-report ${isActive ? "active" : ""}`
              }
            >
              Transaction Reports
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ADMIN_URLS.CLIENT_ACTIVITY_REPORTS}
              className={({ isActive }) =>
                `menu-item-report ${isActive ? "active" : ""}`
              }
            >
              Client Activity Reports
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ADMIN_URLS.USER_ACTIVITY_REPORTS}
              className={({ isActive }) =>
                `menu-item-report ${isActive ? "active" : ""}`
              }
            >
              User Activity Reports
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ADMIN_URLS.FAILED_TRANSACTION_REPORTS}
              className={({ isActive }) =>
                `menu-item-report ${isActive ? "active" : ""}`
              }
            >
              Failed Transaction Reports
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ADMIN_URLS.AUDIT_REPORTS}
              className={({ isActive }) =>
                `menu-item-report ${isActive ? "active" : ""}`
              }
            >
              Audit Reports
            </NavLink>
          </li>

        </ul>
      </nav>

      <div className="business-reports-content">
        <Outlet />
      </div>

    </div>
  );
}