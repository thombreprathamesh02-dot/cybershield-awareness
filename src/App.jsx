import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Phishing from "./pages/Phishing";
import Scams from "./pages/Scams";
import FraudDetection from "./pages/FraudDetection";
import SafetyTips from "./pages/SafetyTips";
import Quiz from "./pages/Quiz";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";


function ProtectedRoute({ children }) {

  const isLoggedIn =
    localStorage.getItem("cyberLoggedIn") === "true";

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}


function App() {

  return (
    <>
      <Navbar />

      <Routes>

        {/* PUBLIC PAGES */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/phishing"
          element={<Phishing />}
        />

        <Route
          path="/scams"
          element={<Scams />}
        />

        <Route
          path="/fraud-detection"
          element={<FraudDetection />}
        />

        <Route
          path="/safety"
          element={<SafetyTips />}
        />

        <Route
          path="/quiz"
          element={<Quiz />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />


        {/* AUTHENTICATION */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />


        {/* PROTECTED DASHBOARD */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />


        {/* UNKNOWN URL */}

        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />

      </Routes>
    </>
  );
}

export default App;