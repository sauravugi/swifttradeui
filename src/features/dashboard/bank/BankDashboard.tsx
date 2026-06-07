import "./BankDashboard.css";

export function BankDashboard() {
  return (
    <div className="dashboard-container">
      <h2 className="title">Bank Dashboard</h2>

      <div className="grid">
        <div className="card">Transactions</div>
        <div className="card">Payments</div>
        <div className="card">Checker Approvals</div>
        <div className="card">Reports</div>
      </div>
    </div>
  );
}