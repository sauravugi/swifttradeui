import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";

function App() {
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