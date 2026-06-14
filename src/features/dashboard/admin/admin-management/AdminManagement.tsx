import { NavLink, Outlet } from "react-router-dom";
import "./AdminManagement.css";
import { ADMIN_URLS } from "../admin-urls";

export function AdminManagement() {
  return (
    <div className="admin-management">

      <nav className="admin-management-navbar">
        <ul>

          <li>
            <NavLink
              to={ADMIN_URLS.USER_LIST}
              className={({ isActive }) =>
                `menu-item-admin-management ${isActive ? "active" : ""}`
              }
            >
              User List
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ADMIN_URLS.ADD_USER}
              className={({ isActive }) =>
                `menu-item-admin-management ${isActive ? "active" : ""}`
              }
            >
              Add User
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ADMIN_URLS.EDIT_USER}
              className={({ isActive }) =>
                `menu-item-admin-management ${isActive ? "active" : ""}`
              }
            >
              Edit User
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ADMIN_URLS.COPY_USER}
              className={({ isActive }) =>
                `menu-item-admin-management ${isActive ? "active" : ""}`
              }
            >
              Copy User
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ADMIN_URLS.DELETE_USER}
              className={({ isActive }) =>
                `menu-item-admin-management ${isActive ? "active" : ""}`
              }
            >
              Delete User
            </NavLink>
          </li>

        </ul>
      </nav>

      <div className="admin-management-content">
        <Outlet />
      </div>

    </div>
  );
}