const ADMIN = "/admin";
const BANK = "/bank";
const CORP = "/corp";

const ADMIN_HOME = `${ADMIN}/home`;

export const ROUTES = {
  // ================= AUTH =================
  LOGIN: "/",

  // ================= BASE MODULES =================
  ADMIN,
  BANK,
  CORP,

  // ================= ADMIN PAGES =================
  ADMIN_HOME,
  ADMIN_CLIENT_MANAGEMENT: `${ADMIN}/client-management`,
  ADMIN_MESSAGE_LOGS: `${ADMIN}/message-logs`,
  ADMIN_GROUP_MANAGEMENT: `${ADMIN}/group-management`,
  ADMIN_ADMIN_MANAGEMENT: `${ADMIN}/admin-management`,
  ADMIN_DOCUMENT_MANAGEMENT: `${ADMIN}/document-management`,
  ADMIN_MICROSERVICES: `${ADMIN}/microservices`,
  ADMIN_BUSINESS_REPORTS: `${ADMIN}/business-reports`,
  ADMIN_MONITORING: `${ADMIN}/monitoring`,
  ADMIN_INTEGRATION_LOGS: `${ADMIN}/integration-logs`,

  // ================= ADMIN HOME MODULE (NESTED ACTIONS) =================
  ADMIN_HOME_INBOUND_MESSAGES: `${ADMIN_HOME}/inbound-messages`,
  ADMIN_HOME_UPLOAD_SWIFT: `${ADMIN_HOME}/upload-swift-file`,
  ADMIN_HOME_UPLOAD_ACK: `${ADMIN_HOME}/upload-ack-file`,
  ADMIN_HOME_BANK_DETAILS: `${ADMIN_HOME}/bank-details`,
  ADMIN_HOME_OUTBOUND_MESSAGES: `${ADMIN_HOME}/outbound-messages`,
  ADMIN_HOME_ACTIVEMQ_MESSAGES: `${ADMIN_HOME}/activemq-messages`,

  // ================= BANK MODULE =================
  BANK_HOME: `${BANK}/home`,

  // ================= CORP MODULE =================
  CORP_HOME: `${CORP}/home`,
};