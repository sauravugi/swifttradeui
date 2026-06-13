import { NavLink, Outlet, useLocation } from "react-router-dom";
import { ROUTES } from "../../../routes/routeConstants";
import "./AdminDashboard.css";

export function AdminDashboard() {
  const location = useLocation();
  const isHomeActive = location.pathname.startsWith(ROUTES.ADMIN_HOME);
  const getClass = (active: boolean) => active ? "menu-item active" : "menu-item";

  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <NavLink
          to={ROUTES.ADMIN_HOME}
          className={() => getClass(isHomeActive)}
        >
          Home
        </NavLink>

        <NavLink
          to={ROUTES.ADMIN_CLIENT_MANAGEMENT}
          className={({ isActive }) => getClass(isActive)}
        >
          Client Management
        </NavLink>

        <NavLink
          to={ROUTES.ADMIN_MESSAGE_LOGS}
          className={({ isActive }) => getClass(isActive)}
        >
          Message Logs
        </NavLink>

        <NavLink
          to={ROUTES.ADMIN_GROUP_MANAGEMENT}
          className={({ isActive }) => getClass(isActive)}
        >
          Group Management
        </NavLink>

        <NavLink
          to={ROUTES.ADMIN_ADMIN_MANAGEMENT}
          className={({ isActive }) => getClass(isActive)}
        >
          Admin Management
        </NavLink>

        <NavLink
          to={ROUTES.ADMIN_DOCUMENT_MANAGEMENT}
          className={({ isActive }) => getClass(isActive)}
        >
          Document Management
        </NavLink>

        <NavLink
          to={ROUTES.ADMIN_MICROSERVICES}
          className={({ isActive }) => getClass(isActive)}
        >
          Microservices
        </NavLink>

        <NavLink
          to={ROUTES.ADMIN_BUSINESS_REPORTS}
          className={({ isActive }) => getClass(isActive)}
        >
          Business Reports
        </NavLink>

        <NavLink
          to={ROUTES.ADMIN_MONITORING}
          className={({ isActive }) => getClass(isActive)}
        >
          Monitoring
        </NavLink>

        <NavLink
          to={ROUTES.ADMIN_INTEGRATION_LOGS}
          className={({ isActive }) => getClass(isActive)}
        >
          Integration Logs
        </NavLink>

      </aside>

      {/* CONTENT */}
      <main className="admin-content">
        <Outlet />
      </main>

    </div>
  );
}