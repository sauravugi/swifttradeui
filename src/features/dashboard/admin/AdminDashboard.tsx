import { NavLink, Outlet, useLocation } from "react-router-dom";
import { ROUTES } from "../../../routes/routeConstants";
import "./AdminDashboard.css";
import { ADMIN_URLS } from "./admin-urls.ts";

export function AdminDashboard() {
  const location = useLocation();
  const isHomeActive = location.pathname.startsWith(ADMIN_URLS.ADMIN_HOME);
  const getClass = (active: boolean) => active ? "menu-item active" : "menu-item";

  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <NavLink
          to={ADMIN_URLS.ADMIN_HOME}
          className={() => getClass(isHomeActive)}
        >
          Home
        </NavLink>

        <NavLink
          to={ADMIN_URLS.ADMIN_CLIENT_MANAGEMENT}
          className={({ isActive }) => getClass(isActive)}
        >
          Client Management
        </NavLink>

        <NavLink
          to={ADMIN_URLS.ADMIN_MESSAGE_LOGS}
          className={({ isActive }) => getClass(isActive)}
        >
          Message Logs
        </NavLink>

        <NavLink
          to={ADMIN_URLS.ADMIN_GROUP_MANAGEMENT}
          className={({ isActive }) => getClass(isActive)}
        >
          Group Management
        </NavLink>

        <NavLink
          to={ADMIN_URLS.ADMIN_ADMIN_MANAGEMENT}
          className={({ isActive }) => getClass(isActive)}
        >
          Admin Management
        </NavLink>

        <NavLink
          to={ADMIN_URLS.ADMIN_DOCUMENT_MANAGEMENT}
          className={({ isActive }) => getClass(isActive)}
        >
          Document Management
        </NavLink>

        <NavLink
          to={ADMIN_URLS.ADMIN_MICROSERVICES}
          className={({ isActive }) => getClass(isActive)}
        >
          Microservices
        </NavLink>

        <NavLink
          to={ADMIN_URLS.ADMIN_BUSINESS_REPORTS}
          className={({ isActive }) => getClass(isActive)}
        >
          Business Reports
        </NavLink>

        <NavLink
          to={ADMIN_URLS.ADMIN_MONITORING}
          className={({ isActive }) => getClass(isActive)}
        >
          Monitoring
        </NavLink>

        <NavLink
          to={ADMIN_URLS.ADMIN_INTEGRATION_LOGS}
          className={({ isActive }) => getClass(isActive)}
        >
          Integration Logs
        </NavLink>

      </aside>

      <main className="admin-content">
        <Outlet />
      </main>

    </div>
  );
}