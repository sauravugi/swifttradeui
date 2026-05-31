import { Navigate } from "react-router-dom";
import { ROUTES } from "./routeConstants";

interface Props {
  children: React.ReactNode;
}

export default function ProtectedRoute({
  children,
}: Props) {
  const isAuthenticated = true;

  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <Navigate to={ROUTES.LOGIN} replace />
  );
}