import { useState } from "react";
import "./AdminDashboard.css";
import { AdminHome } from "./admin-home";

export function AdminDashboard() {
  const [activeMenu, setActiveMenu] = useState("home");

  const renderContent = () => {
    switch (activeMenu) {
      case "home":
        return <AdminHome />;

      case "clientManagement":
        return (
          <>
            <h2>Client Management</h2>
            <p>Manage application clients here.</p>
          </>
        );

      case "messageLogs":
        return (
          <>
            <h2>Message Logs</h2>
            <p>View and analyze message logs.</p>
          </>
        );

      case "groupManagement":
        return (
          <>
            <h2>Group Management</h2>
            <p>Manage groups and permissions.</p>
          </>
        );

      case "adminManagement":
        return (
          <>
            <h2>Admin Management</h2>
            <p>Manage administrator accounts.</p>
          </>
        );

      case "docManagement":
        return (
          <>
            <h2>Document Management</h2>
            <p>Manage uploaded documents.</p>
          </>
        );

      case "microservices":
        return (
          <>
            <h2>Microservices</h2>
            <p>Monitor and manage microservices.</p>
          </>
        );

      case "businessReports":
        return (
          <>
            <h2>Business Reports</h2>
            <p>View business reports and analytics.</p>
          </>
        );

      case "monitoring":
        return (
          <>
            <h2>Monitoring</h2>
            <p>Monitoring System reports</p>
          </>
        );

      case "integrationLogs":
        return (
          <>
            <h2>Integration Logs</h2>
            <p>View integration logs here.</p>
          </>
        );

      default:
        return (
          <>
            <h2>Home</h2>
            <p>Welcome to Admin Dashboard.</p>
          </>
        );
    }
  };

  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">

        <button
          className={`menu-item ${activeMenu === "home" ? "active" : ""}`}
          onClick={() => setActiveMenu("home")}
        >
          Home
        </button>

        <button
          className={`menu-item ${
            activeMenu === "clientManagement" ? "active" : ""
          }`}
          onClick={() => setActiveMenu("clientManagement")}
        >
          Client Management
        </button>

        <button
          className={`menu-item ${
            activeMenu === "messageLogs" ? "active" : ""
          }`}
          onClick={() => setActiveMenu("messageLogs")}
        >
          Message Logs
        </button>

        <button
          className={`menu-item ${
            activeMenu === "groupManagement" ? "active" : ""
          }`}
          onClick={() => setActiveMenu("groupManagement")}
        >
          Group Management
        </button>

        <button
          className={`menu-item ${
            activeMenu === "adminManagement" ? "active" : ""
          }`}
          onClick={() => setActiveMenu("adminManagement")}
        >
          Admin Management
        </button>

        <button
          className={`menu-item ${
            activeMenu === "docManagement" ? "active" : ""
          }`}
          onClick={() => setActiveMenu("docManagement")}
        >
          Document Management
        </button>

        <button
          className={`menu-item ${
            activeMenu === "microservices" ? "active" : ""
          }`}
          onClick={() => setActiveMenu("microservices")}
        >
          Microservices
        </button>

        <button
          className={`menu-item ${
            activeMenu === "businessReports" ? "active" : ""
          }`}
          onClick={() => setActiveMenu("businessReports")}
        >
          Business Reports
        </button>

        <button
          className={`menu-item ${
            activeMenu === "monitoring" ? "active" : ""
          }`}
          onClick={() => setActiveMenu("monitoring")}
          >
          Monitoring
        </button>

        <button
          className={`menu-item ${
            activeMenu === "integrationLogs" ? "active" : ""
          }`}
          onClick={() => setActiveMenu("integrationLogs")}
          >
          Integration Logs
        </button>
      </aside>

      <main className="admin-content">
        <div className="content-card">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}