import { useState } from "react";
import { Box, Button, IconButton, InputAdornment, Paper, TextField, Typography} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./LoginPage.css";
import { login } from "../../../services/authService";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes/routeConstants";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { loginSuccess } from "../authSlice";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (
      e: React.FormEvent
    ) => {
      e.preventDefault();

      try {
        const response = await login({
          username,
          password,
        });

        sessionStorage.setItem(
          "token",
          response.accessToken
        );

        dispatch(
          loginSuccess(response.accessToken)
        );

        navigate(ROUTES.DASHBOARD, {
          replace: true,
        });
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <Box className="login-page">
      <Box className="login-left">

        <Box className="circle-bg" />

        <Typography className="hero-title">
          Trade Finance
        </Typography>

        <Typography className="hero-subtitle">
          Digitize and manage your trade
          finance operations with complete
          visibility across Letters of
          Credit, Guarantees, Amendments,
          Collections and Reporting.
        </Typography>

        <Box className="feature-list">
          <Typography>
            ✓ Letter of Credit Management
          </Typography>

          <Typography>
            ✓ Bank Guarantee Processing
          </Typography>

          <Typography>
            ✓ Amendments & Approvals
          </Typography>

          <Typography>
            ✓ Collections & Payments
          </Typography>

          <Typography>
            ✓ Trade Reporting & Analytics
          </Typography>

          <Typography>
            ✓ Audit Trail & Compliance
          </Typography>
        </Box>
      </Box>

      <Box className="login-right">
        <Paper className="login-card">
          <Typography
            variant="h4"
            className="login-title"
          >
            Welcome Back
          </Typography>

          <Typography
            className="login-subtitle"
          >
            Sign in to your account
          </Typography>

          <Box
            component="form"
            className="login-form"
            onSubmit={handleSubmit}
          >
            <TextField
              label="Username"
              fullWidth
              value={username}
              onChange={(e) =>
                setUsername(
                  e.target.value
                )
              }
            />

            <TextField
              label="Password"
              fullWidth
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={() =>
                          setShowPassword(!showPassword)
                        }
                      >
                        {showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />

            <Typography className="forgot-password">
              Forgot Password?
            </Typography>

            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              className="login-btn"
            >
              Sign In
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}