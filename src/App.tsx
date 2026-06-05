import { Header } from "./components/header";
import { Footer } from "./components/footer";
import LoginPage from "./features/auth/pages/LoginPage";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="app-content">
        <LoginPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;