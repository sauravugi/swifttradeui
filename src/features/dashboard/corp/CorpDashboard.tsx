import "./CorpDashboard.css";

export function CorpDashboard() {
  return (
    <div className="dashboard-container">
      <h2 className="title">Corporate Dashboard</h2>

      <div className="grid">
        <div className="card">Trade Finance</div>
        <div className="card">Invoices</div>
        <div className="card">Risk Management</div>
        <div className="card">Maker / Checker Flow</div>
      </div>
    </div>
  );
}