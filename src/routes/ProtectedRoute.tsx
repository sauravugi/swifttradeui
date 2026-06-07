import { Navigate } from "react-router-dom";
import { ROUTES } from "./routeConstants";
import { useAppSelector } from "../hooks/reduxHooks";

interface Props {
  children: React.ReactNode;
}

export default function ProtectedRoute({
  children,
}: Props) {
  const isAuthenticated = useAppSelector(
    (state) => state.auth.isAuthenticated
  );

  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <Navigate
      to={ROUTES.LOGIN}
      replace
    />
  );
}