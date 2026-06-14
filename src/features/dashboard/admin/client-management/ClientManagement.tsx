import { NavLink, Outlet } from "react-router-dom";
import "./ClientManagement.css";
import { ADMIN_URLS } from "../admin-urls.ts";

export function ClientManagement() {
  return (
    <div className="client-management">

      <nav className="client-navbar">
        <ul>

          <li>
            <NavLink
              to={ADMIN_URLS.CLIENT_LIST}
              className={({ isActive }) =>
                `menu-item-client ${isActive ? "active" : ""}`
              }
            >
              Client List
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ADMIN_URLS.ADD_CLIENT}
              className={({ isActive }) =>
                `menu-item-client ${isActive ? "active" : ""}`
              }
            >
              Add Client
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ADMIN_URLS.CLIENT_INTEGRATION}
              className={({ isActive }) =>
                `menu-item-client ${isActive ? "active" : ""}`
              }
            >
              Client Integration
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ADMIN_URLS.EDIT_CLIENT}
              className={({ isActive }) =>
                `menu-item-client ${isActive ? "active" : ""}`
              }
            >
              Edit Client
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ADMIN_URLS.CLIENT_USER}
              className={({ isActive }) =>
                `menu-item-client ${isActive ? "active" : ""}`
              }
            >
              Client User
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ADMIN_URLS.DELETE_CLIENT}
              className={({ isActive }) =>
                `menu-item-client ${isActive ? "active" : ""}`
              }
            >
              Delete Client
            </NavLink>
          </li>

        </ul>
      </nav>

      <div className="client-management-content">
        <Outlet />
      </div>

    </div>
  );
}