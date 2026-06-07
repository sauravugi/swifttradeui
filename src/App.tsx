import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useAppDispatch } from "./hooks/reduxHooks";
import { loginSuccess, logout } from "./features/auth/authSlice";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      dispatch(logout());
      return;
    }
    try {
      const payload: any = jwtDecode(token);
      if (payload.exp * 1000 < Date.now()) {
        dispatch(logout());
        return;
      }
      dispatch(loginSuccess(token));
      const timeout = payload.exp * 1000 - Date.now();
      const timer = setTimeout(() => {
        dispatch(logout());
      }, timeout);
      return () => clearTimeout(timer);
    } catch (err) {
      console.error("Invalid token", err);
      dispatch(logout());
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <main className="app-content">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;