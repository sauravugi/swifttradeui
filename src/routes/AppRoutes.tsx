import { Routes, Route, Navigate } from "react-router-dom";

import { LoginPage } from "../features/auth";

import { AdminDashboard } from "../features/dashboard/admin/AdminDashboard";
import { AdminHome } from "../features/dashboard/admin/admin-home/AdminHome";
import { InboundMessages } from "../features/dashboard/admin/admin-home/inbound-messages";
import { ClientManagement } from "../features/dashboard/admin/client-management";

import { BankDashboard } from "../features/dashboard/bank/BankDashboard";
import { CorpDashboard } from "../features/dashboard/corp/CorpDashboard";

import { ROUTES } from "../routes/routeConstants";

export default function AppRoutes() {
  return (
    <Routes>

      {/* ================= LOGIN ================= */}
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />

      {/* ================= ADMIN ================= */}
      <Route path={`${ROUTES.ADMIN}/*`} element={<AdminDashboard />}>

        {/* /admin → /admin/home */}
        <Route index element={<Navigate to="home" replace />} />

        {/* HOME */}
        <Route path="home" element={<AdminHome />}>

          <Route index element={<InboundMessages />} />
          <Route path="inbound-messages" element={<InboundMessages />} />

        </Route>

        {/* CLIENT MANAGEMENT */}
        <Route path="client-management" element={<ClientManagement />} />

      </Route>

      {/* ================= BANK ================= */}
      <Route path={`${ROUTES.BANK}/*`} element={<BankDashboard />} />

      {/* ================= CORP ================= */}
      <Route path={`${ROUTES.CORP}/*`} element={<CorpDashboard />} />

      {/* ================= FALLBACK ================= */}
      <Route path="*" element={<Navigate to={ROUTES.LOGIN} replace />} />

    </Routes>
  );
}