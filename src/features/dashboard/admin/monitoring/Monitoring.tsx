import "./Monitoring.css";

export function Monitoring() {
  return (
    <div className="monitoring-page">

      <h2>Monitoring</h2>

      <div className="monitoring-grid">

        <div className="monitoring-card">
          <h3>Active Users</h3>
          <p>Currently logged-in users across the system.</p>
        </div>

        <div className="monitoring-card">
          <h3>Failed Transactions</h3>
          <p>Monitor failed trade finance transactions.</p>
        </div>

        <div className="monitoring-card">
          <h3>Alerts</h3>
          <p>View critical and warning alerts.</p>
        </div>

        <div className="monitoring-card">
          <h3>Service Status</h3>
          <p>Check status of running services.</p>
        </div>

        <div className="monitoring-card">
          <h3>Queue Status</h3>
          <p>Monitor ActiveMQ and processing queues.</p>
        </div>

      </div>

    </div>
  );
}