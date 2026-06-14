export const ADMIN_URLS = {
  ADMIN_HOME: "/admin/home",
  ADMIN_CLIENT_MANAGEMENT: "/admin/client-management",
  ADMIN_MESSAGE_LOGS: "/admin/message-logs",
  ADMIN_GROUP_MANAGEMENT: "/admin/group-management",
  ADMIN_ADMIN_MANAGEMENT: "/admin/admin-management",
  ADMIN_DOCUMENT_MANAGEMENT: "/admin/document-management",
  ADMIN_MICROSERVICES: "/admin/microservices",
  ADMIN_BUSINESS_REPORTS: "/admin/business-reports",
  ADMIN_MONITORING: "/admin/monitoring",
  ADMIN_INTEGRATION_LOGS: "/admin/integration-logs",

  // ================= ADMIN HOME MODULE =================
  ADMIN_HOME_INBOUND_MESSAGES: "/admin/home/inbound-messages",
  ADMIN_HOME_UPLOAD_SWIFT: "/admin/home/upload-swift-file",
  ADMIN_HOME_UPLOAD_ACK: "/admin/home/upload-ack-file",
  ADMIN_HOME_BANK_DETAILS: "/admin/home/bank-details",
  ADMIN_HOME_OUTBOUND_MESSAGES: "/admin/home/outbound-messages",
  ADMIN_HOME_ACTIVEMQ_MESSAGES: "/admin/home/activemq-messages",

  // ================= CLIENT MANAGEMENT MODULE =================
  CLIENT_LIST: "/admin/client-management/client-list",
  ADD_CLIENT: "/admin/client-management/add-client",
  CLIENT_INTEGRATION: "/admin/client-management/client-integration",
  EDIT_CLIENT: "/admin/client-management/edit-client",
  CLIENT_USER: "/admin/client-management/client-user",
  DELETE_CLIENT: "/admin/client-management/delete-client",

  // ================= MESSAGE LOGS MODULE =================
  MESSAGE_LOGS_GENERIC: "/admin/message-logs/generic-message-logs",
  MESSAGE_LOGS_INBOUND: "/admin/message-logs/inbound-message-logs",
  MESSAGE_LOGS_OUTBOUND: "/admin/message-logs/outbound-message-logs",
  MESSAGE_LOGS_ADMIN: "/admin/message-logs/admin-message-logs",
  MESSAGE_LOGS_EMAIL: "/admin/message-logs/email-logs",

  // ================= GROUP MANAGEMENT MODULE =================
  GROUP_LIST: "/admin/group-management/group-list",
  ADD_GROUP: "/admin/group-management/add-group",
  SET_GROUP_ACCESS: "/admin/group-management/set-group-access",
  DELETE_GROUP: "/admin/group-management/delete-group",
  EDIT_GROUP: "/admin/group-management/edit-group",

  // ================= ADMIN MANAGEMENT MODULE =================
  USER_LIST: "/admin/admin-management/user-list",
  ADD_USER: "/admin/admin-management/add-user",
  EDIT_USER: "/admin/admin-management/edit-user",
  COPY_USER: "/admin/admin-management/copy-user",
  DELETE_USER: "/admin/admin-management/delete-user",

  // ================= DOCUMENT MANAGEMENT MODULE =================
  DOCUMENT_LIST: "/admin/document-management/document-list",
  UPLOAD_DOCUMENT: "/admin/document-management/upload-document",
  DOCUMENT_CATEGORIES: "/admin/document-management/document-categories",
  DOWNLOAD_DOCUMENT: "/admin/document-management/download-document",
  EDIT_DOCUMENT: "/admin/document-management/edit-document",
  DELETE_DOCUMENT: "/admin/document-management/delete-document",

  // ================= BUSINESS REPORTS =================
  TRANSACTION_REPORTS: "/admin/business-reports/transaction-reports",
  CLIENT_ACTIVITY_REPORTS: "/admin/business-reports/client-activity-reports",
  USER_ACTIVITY_REPORTS: "/admin/business-reports/user-activity-reports",
  FAILED_TRANSACTION_REPORTS: "/admin/business-reports/failed-transaction-reports",
  AUDIT_REPORTS: "/admin/business-reports/audit-reports",

  // ================= INTEGRATION_LOGS =================
  API_LOGS: "/admin/integration-logs/api-logs",
  SWIFT_LOGS: "/admin/integration-logs/swift-logs",
  ACTIVEMQ_LOGS: "/admin/integration-logs/activemq-logs",
  FILE_TRANSFER_LOGS: "/admin/integration-logs/file-transfer-logs",
  FAILED_INTEGRATIONS: "/admin/integration-logs/failed-integrations",
};