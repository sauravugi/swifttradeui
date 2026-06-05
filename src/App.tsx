import { Header } from "./components/header";
import { Footer } from "./components/footer";
import LoginPage from "./features/auth/pages/LoginPage";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="app-content">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;