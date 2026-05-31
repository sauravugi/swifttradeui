import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { login } from "../../../services/authService";
import "./LoginPage.css";
import { ROUTES } from "../../../routes";

export default function LoginPage() {
  const navigate = useNavigate();

  const [clientName, setClientName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!clientName.trim()) {
      alert("Please enter client name");
      return;
    }

    if (!username.trim()) {
      alert("Please enter username");
      return;
    }

    if (!password.trim()) {
      alert("Please enter password");
      return;
    }

    try {
      const response = await login({clientName,username,password,});
      localStorage.setItem("accessToken",response.accessToken);
      navigate(ROUTES.DASHBOARD);
    } catch (error) {
      console.error("Login Failed", error);
      alert("Invalid credentials");
    }
  };

  return (
    <Box className="login-container">
      <Card className="login-card">
        <CardContent>
          <Box className="login-header">
            <Typography
              variant="h4"
              className="login-title"
            >
              SwiftTrade
            </Typography>

            <Typography
              variant="body2"
              className="login-subtitle"
            >
              Trade Finance Portal
            </Typography>
          </Box>

          <Box
            component="form"
            onSubmit={handleLogin}
            className="login-form"
          >
            <TextField
              label="Client Name"
              fullWidth
              value={clientName}
              onChange={(e) =>
                setClientName(e.target.value)
              }
            />

            <TextField
              label="Username"
              fullWidth
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
            />

            <TextField
              label="Password"
              type="password"
              fullWidth
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              className="login-button"
            >
              Login
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}