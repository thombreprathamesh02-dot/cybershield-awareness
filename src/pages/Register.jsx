import { useState } from "react";
import { ShieldCheck, UserPlus, Mail, Lock, User } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    const user = {
      name,
      email,
      password
    };

    localStorage.setItem("cyberUser", JSON.stringify(user));

    alert("Registration successful!");

    navigate("/login");
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-logo">
          <ShieldCheck size={38} />
        </div>

        <div className="auth-heading">

          <span>CYBERSHIELD</span>

          <h1>Create Account</h1>

          <p>
            Create your account to access the awareness program.
          </p>

        </div>


        <form onSubmit={handleRegister}>

          <label>Full Name</label>

          <div className="input-box">
            <User size={18} />

            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>


          <label>Email Address</label>

          <div className="input-box">
            <Mail size={18} />

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>


          <label>Password</label>

          <div className="input-box">
            <Lock size={18} />

            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>


          <button type="submit" className="auth-btn">
            <UserPlus size={18} />
            Create Account
          </button>

        </form>


        <div className="auth-footer">

          <span>Already have an account?</span>

          <Link to="/login">
            Login
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Register;