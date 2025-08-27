import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing";
import DashboardPage from "./pages/dashboard";
import AuthTest from "./pages/authTest";

function App() {
  // Using basic react-router-dom to create different pages.
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<DashboardPage />} />
        <Route path="/auth" element={<AuthTest />} />
      </Routes>
    </Router>
  );
}

export default App;
