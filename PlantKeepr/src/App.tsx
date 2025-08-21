import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing";
import DashboardPage from "./pages/dashboard";

function App() {
  // Using basic react-router-dom to create different pages.
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
