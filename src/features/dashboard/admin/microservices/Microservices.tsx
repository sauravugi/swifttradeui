import "./Microservices.css";

export function Microservices() {
  return (
    <div className="microservices-page">

      <div className="page-header">
        <h2>Microservices</h2>
        <p>Allocate microservice access to clients.</p>
      </div>

      <div className="allocation-section">

        <div className="form-group">
          <label>Client</label>
          <select>
            <option>Select Client</option>
            <option>HDFC Bank</option>
            <option>ICICI Bank</option>
            <option>SBI</option>
          </select>
        </div>

        <div className="form-group">
          <label>Available Microservices</label>

          <div className="service-list">

            <label>
              <input type="checkbox" />
              Letter Of Credit Service
            </label>

            <label>
              <input type="checkbox" />
              Bank Guarantee Service
            </label>

            <label>
              <input type="checkbox" />
              Collection Service
            </label>

            <label>
              <input type="checkbox" />
              Swift Messaging Service
            </label>

            <label>
              <input type="checkbox" />
              Reporting Service
            </label>

            <label>
              <input type="checkbox" />
              Notification Service
            </label>

          </div>
        </div>

        <button className="allocate-btn">
          Save Allocation
        </button>

      </div>

    </div>
  );
}