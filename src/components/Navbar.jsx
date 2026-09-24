import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <Link to="/" className="logo">
          <div className="logo-icon">
            <ShieldCheck size={25} />
          </div>

          <div>
            <h2>CyberShield</h2>
            <span>Awareness Program</span>
          </div>
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/phishing">Phishing</Link>
          <Link to="/scams">Scams</Link>
          <Link to="/fraud-detection">Fraud Detection</Link>
          <Link to="/safety">Safety Tips</Link>
          <Link to="/quiz">Quiz</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="nav-actions">
          <Link to="/login" className="login-btn">
            Login
          </Link>

          <Link to="/register" className="register-btn">
            Get Started
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;