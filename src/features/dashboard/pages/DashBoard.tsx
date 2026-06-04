import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import { ROUTES } from "../../../routes";
import "./DashBoard.css";

export default function DashboardPage() {
  const navigate = useNavigate();

  const username =
    localStorage.getItem("username") || "User";

  const role =
    localStorage.getItem("role") || "CUSTOMER";

  const clientName =
    localStorage.getItem("clientName") || "Demo Client";

  const handleLogout = () => {
    localStorage.clear();
    navigate(ROUTES.LOGIN);
  };

  const dashboardModules = {
    ADMIN: [
      "User Management",
      "Role Management",
      "Client Management",
      "Audit Logs",
    ],
    EMPLOYEE: [
      "Pending LC Requests",
      "Pending BG Requests",
      "Compliance Review",
      "Customer Support",
    ],
    CUSTOMER: [
      "Create Letter Of Credit",
      "Request Bank Guarantee",
      "My Transactions",
      "Reports",
    ],
  };

  const modules =
    dashboardModules[
      role as keyof typeof dashboardModules
    ] || dashboardModules.CUSTOMER;

  return (
    <Box className="dashboard-container">
      <Box className="dashboard-header">
        <Box>
          <Typography variant="h4">
            Trade Finance Dashboard
          </Typography>

          <Typography
            variant="body1"
            className="dashboard-subtitle"
          >
            Welcome {username}
          </Typography>

          <Typography
            variant="body2"
            className="dashboard-subtitle"
          >
            {clientName} | {role}
          </Typography>
        </Box>

        <Button
          variant="outlined"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>

      <Box className="dashboard-stats">
        <Card className="stat-card">
          <CardContent>
            <Typography variant="h6">
              Open Transactions
            </Typography>

            <Typography variant="h4">
              24
            </Typography>
          </CardContent>
        </Card>

        <Card className="stat-card">
          <CardContent>
            <Typography variant="h6">
              Pending Approvals
            </Typography>

            <Typography variant="h4">
              08
            </Typography>
          </CardContent>
        </Card>

        <Card className="stat-card">
          <CardContent>
            <Typography variant="h6">
              Completed Today
            </Typography>

            <Typography variant="h4">
              15
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Typography
        variant="h5"
        className="section-title"
      >
        Available Modules
      </Typography>

      <Box className="module-grid">
        {modules.map((module) => (
          <Card
            key={module}
            className="module-card"
          >
            <CardContent>
              <Typography variant="h6">
                {module}
              </Typography>

              <Typography variant="body2">
                Access and manage {module}.
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}