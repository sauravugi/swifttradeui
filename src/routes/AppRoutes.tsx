import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../features/auth";
import { DashboardPage } from "../features/dashboard";
import ProtectedRoute from "./ProtectedRoute";
import { ROUTES } from "./routeConstants";

export default function AppRoutes() {
  return (
      <Routes>
        <Route
          path={ROUTES.LOGIN}
          element={<LoginPage />}
        />
        <Route
          path={ROUTES.DASHBOARD}
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
      </Routes>
  );
}