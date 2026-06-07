import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { AdminDashboard } from "../admin/AdminDashboard";
import { BankDashboard } from "../bank/BankDashboard";
import { CorpDashboard } from "../corp/CorpDashboard";
import { useAppSelector } from "../../../hooks/reduxHooks";

interface JwtPayload {
  roles?: string[];
}

export default function DashBoard() {
  const token = useAppSelector((state) => state.auth.token);

  const [role, setRole] = useState<
    "ADMIN" | "BANK" | "CORP" | "NONE" | null
  >(null);

  useEffect(() => {
    if (!token) {
      setRole("NONE");
      return;
    }

    try {
      const payload = jwtDecode<JwtPayload>(token);

      const roles = payload.roles || [];

      if (roles.includes("SUPER_ADMIN")) {
        setRole("ADMIN");
      } else if (
        roles.includes("BANK_ADMIN") ||
        roles.includes("BANK_USER")
      ) {
        setRole("BANK");
      } else if (
        roles.includes("CORPORATE_ADMIN") ||
        roles.includes("CORPORATE_USER")
      ) {
        setRole("CORP");
      } else {
        setRole("NONE");
      }
    } catch (err) {
      console.error("Invalid token", err);
      setRole("NONE");
    }
  }, [token]);

  if (role === null) {
    return <div>Loading...</div>;
  }

  if (role === "NONE") {
    return (
      <div style={{ padding: 20, color: "red" }}>
        Unauthorized Access
      </div>
    );
  }

  return (
    <>
      {role === "ADMIN" && <AdminDashboard />}
      {role === "BANK" && <BankDashboard />}
      {role === "CORP" && <CorpDashboard />}
    </>
  );
}