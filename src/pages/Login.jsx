import { useState } from "react";
import {
  ShieldCheck,
  LogIn,
  Mail,
  Lock
} from "lucide-react";

import { useNavigate, Link } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    const savedUser = JSON.parse(
      localStorage.getItem("cyberUser")
    );

    if (!savedUser) {
      alert("No account found. Please register first.");
      return;
    }

    if (
      email === savedUser.email &&
      password === savedUser.password
    ) {

      localStorage.setItem(
        "cyberLoggedIn",
        "true"
      );

      localStorage.setItem(
        "cyberCurrentUser",
        JSON.stringify({
          name: savedUser.name,
          email: savedUser.email
        })
      );

      navigate("/dashboard");

    } else {

      alert("Invalid email or password.");

    }
  };


  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-logo">
          <ShieldCheck size={38} />
        </div>


        <div className="auth-heading">

          <span>WELCOME BACK</span>

          <h1>Login</h1>

          <p>
            Sign in to continue your cybersecurity awareness journey.
          </p>

        </div>


        <form onSubmit={handleLogin}>

          <label>Email Address</label>

          <div className="input-box">

            <Mail size={18} />

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

          </div>


          <label>Password</label>

          <div className="input-box">

            <Lock size={18} />

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

          </div>


          <button
            type="submit"
            className="auth-btn"
          >

            <LogIn size={18} />

            Login

          </button>

        </form>


        <div className="auth-footer">

          <span>Don't have an account?</span>

          <Link to="/register">
            Create Account
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Login;