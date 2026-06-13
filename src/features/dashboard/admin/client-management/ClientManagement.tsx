import "./ClientManagement.css";

export function ClientManagement() {
  return (
    <div className="client-management">
      <div className="header">
        <h2>Client Management</h2>
        <p>Manage all your clients here</p>
      </div>

      <div className="content-box">
        <div className="card">
          <h3>Total Clients</h3>
          <p>125</p>
        </div>

        <div className="card">
          <h3>Active Clients</h3>
          <p>98</p>
        </div>

        <div className="card">
          <h3>Inactive Clients</h3>
          <p>27</p>
        </div>
      </div>
    </div>
  );
}