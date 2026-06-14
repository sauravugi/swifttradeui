import { NavLink, Outlet } from "react-router-dom";
import "./DocsManagement.css";
import { ADMIN_URLS } from "../admin-urls";

export function DocsManagement() {
  return (
    <div className="document-management">

      <nav className="document-navbar">
        <ul>

          <li>
            <NavLink
              to={ADMIN_URLS.DOCUMENT_LIST}
              className={({ isActive }) =>
                `menu-item-document ${isActive ? "active" : ""}`
              }
            >
              Document List
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ADMIN_URLS.UPLOAD_DOCUMENT}
              className={({ isActive }) =>
                `menu-item-document ${isActive ? "active" : ""}`
              }
            >
              Upload Document
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ADMIN_URLS.DOCUMENT_CATEGORIES}
              className={({ isActive }) =>
                `menu-item-document ${isActive ? "active" : ""}`
              }
            >
              Document Categories
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ADMIN_URLS.DOWNLOAD_DOCUMENT}
              className={({ isActive }) =>
                `menu-item-document ${isActive ? "active" : ""}`
              }
            >
              Download Document
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ADMIN_URLS.EDIT_DOCUMENT}
              className={({ isActive }) =>
                `menu-item-document ${isActive ? "active" : ""}`
              }
            >
              Edit Document
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ADMIN_URLS.DELETE_DOCUMENT}
              className={({ isActive }) =>
                `menu-item-document ${isActive ? "active" : ""}`
              }
            >
              Delete Document
            </NavLink>
          </li>

        </ul>
      </nav>

      <div className="document-management-content">
        <Outlet />
      </div>

    </div>
  );
}