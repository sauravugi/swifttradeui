import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../features/auth";
import { AdminDashboard } from "../features/dashboard/admin/AdminDashboard";
import { AdminHome } from "../features/dashboard/admin/admin-home/AdminHome";
import { InboundMessages } from "../features/dashboard/admin/admin-home/inbound-messages";
import { ClientManagement } from "../features/dashboard/admin/client-management";
import { MessageLogs } from "../features/dashboard/admin/message-logs";
import { GroupManagement } from "../features/dashboard/admin/group-management";
import { AdminManagement } from "../features/dashboard/admin/admin-management";
import { DocsManagement } from "../features/dashboard/admin/docs-management";
import { Microservices } from "../features/dashboard/admin/microservices";
import { BusinessReports } from "../features/dashboard/admin/business-reports";
import { Monitoring } from "../features/dashboard/admin/monitoring";
import { IntegrationLogs } from "../features/dashboard/admin/integration-logs";
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
        <Route index element={<Navigate to={ROUTES.ADMIN_HOME} replace />} />
        <Route path={ROUTES.ADMIN_HOME} element={<AdminHome />}>
          <Route index element={<InboundMessages />} />
          <Route path={ROUTES.ADMIN_HOME_INBOUND_MESSAGES} element={<InboundMessages />} />
        </Route>
        <Route path={ROUTES.ADMIN_CLIENT_MANAGEMENT} element={<ClientManagement />} />
        <Route path={ROUTES.ADMIN_MESSAGE_LOGS} element={<MessageLogs />} />
        <Route path={ROUTES.ADMIN_GROUP_MANAGEMENT} element={<GroupManagement />} />
        <Route path={ROUTES.ADMIN_ADMIN_MANAGEMENT} element={<AdminManagement />} />
        <Route path={ROUTES.ADMIN_DOCUMENT_MANAGEMENT} element={<DocsManagement />} />
        <Route path={ROUTES.ADMIN_MICROSERVICES} element={<Microservices />} />
        <Route path={ROUTES.ADMIN_BUSINESS_REPORTS} element={<BusinessReports />} />
        <Route path={ROUTES.ADMIN_MONITORING} element={<Monitoring />} />
        <Route path={ROUTES.ADMIN_INTEGRATION_LOGS} element={<IntegrationLogs />} />
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