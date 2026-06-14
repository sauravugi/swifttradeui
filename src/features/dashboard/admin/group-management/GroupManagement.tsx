import { NavLink, Outlet } from "react-router-dom";
import "./GroupManagement.css";
import { ADMIN_URLS } from "../admin-urls";

export function GroupManagement() {
  return (
    <div className="group-management">

      <nav className="group-navbar">
        <ul>

          <li>
            <NavLink
              to={ADMIN_URLS.GROUP_LIST}
              className={({ isActive }) =>
                `menu-item-group ${isActive ? "active" : ""}`
              }
            >
              Group List
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ADMIN_URLS.ADD_GROUP}
              className={({ isActive }) =>
                `menu-item-group ${isActive ? "active" : ""}`
              }
            >
              Add Group
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ADMIN_URLS.SET_GROUP_ACCESS}
              className={({ isActive }) =>
                `menu-item-group ${isActive ? "active" : ""}`
              }
            >
              Set Group Access
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ADMIN_URLS.DELETE_GROUP}
              className={({ isActive }) =>
                `menu-item-group ${isActive ? "active" : ""}`
              }
            >
              Delete Group
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ADMIN_URLS.EDIT_GROUP}
              className={({ isActive }) =>
                `menu-item-group ${isActive ? "active" : ""}`
              }
            >
              Edit Group
            </NavLink>
          </li>

        </ul>
      </nav>

      <div className="group-management-content">
        <Outlet />
      </div>

    </div>
  );
}