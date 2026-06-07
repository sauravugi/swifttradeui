import "./AdminDashboard.css";

export function AdminDashboard() {
  return (
    <div className="dashboard-container">
      <h2>Super Admin Dashboard</h2>

      <div className="grid">
        <div className="card">User Management</div>
        <div className="card">Client Management</div>
        <div className="card">System Config</div>
        <div className="card">Audit Logs</div>
      </div>
    </div>
  );
}