import {
  ShieldCheck,
  User,
  BookOpen,
  Trophy,
  CheckCircle2,
  Circle,
  LogOut,
  ArrowRight
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const currentUser = JSON.parse(
    localStorage.getItem("cyberCurrentUser")
  );

  const userName = currentUser?.name || "CyberShield User";
  const userEmail = currentUser?.email || "";

  const quizScore = Number(
    localStorage.getItem(`quizScore_${userEmail}`) || 0
  );

  const phishingCompleted =
    localStorage.getItem(`phishingCompleted_${userEmail}`) === "true";

  const scamsCompleted =
    localStorage.getItem(`scamsCompleted_${userEmail}`) === "true";

  const fraudCompleted =
    localStorage.getItem(`fraudCompleted_${userEmail}`) === "true";

  const completedModules = [
    phishingCompleted,
    scamsCompleted,
    fraudCompleted
  ].filter(Boolean).length;

  const progress = Math.round(
    (completedModules / 3) * 100
  );


  const handleLogout = () => {

    localStorage.removeItem("cyberLoggedIn");
    localStorage.removeItem("cyberCurrentUser");

    navigate("/login");
  };


  return (
    <div className="dashboard-page">

      {/* HEADER */}

      <section className="dashboard-header">

        <div>

          <div className="dashboard-badge">
            <ShieldCheck size={16} />
            CYBERSHIELD DASHBOARD
          </div>

          <h1>
            Welcome, <span>{userName}</span>
          </h1>

          <p>
            Continue your cybersecurity awareness journey.
          </p>

        </div>


        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          <LogOut size={17} />
          Logout
        </button>

      </section>


      {/* STATS */}

      <section className="dashboard-stats">

        <div className="dashboard-stat-card">

          <div className="stat-icon">
            <BookOpen size={23} />
          </div>

          <div>
            <span>MODULES COMPLETED</span>
            <strong>
              {completedModules} / 3
            </strong>
          </div>

        </div>


        <div className="dashboard-stat-card">

          <div className="stat-icon">
            <Trophy size={23} />
          </div>

          <div>
            <span>QUIZ SCORE</span>
            <strong>
              {quizScore} / 10
            </strong>
          </div>

        </div>


        <div className="dashboard-stat-card">

          <div className="stat-icon">
            <ShieldCheck size={23} />
          </div>

          <div>
            <span>OVERALL PROGRESS</span>
            <strong>
              {progress}%
            </strong>
          </div>

        </div>

      </section>


      {/* PROGRESS */}

      <section className="progress-card">

        <div className="progress-heading">

          <div>

            <span>LEARNING PROGRESS</span>

            <h2>
              Your Awareness Journey
            </h2>

          </div>

          <strong>
            {progress}%
          </strong>

        </div>


        <div className="dashboard-progress-track">

          <div
            className="dashboard-progress-fill"
            style={{
              width: `${progress}%`
            }}
          ></div>

        </div>


        <p>
          Complete the learning modules to improve your
          cybersecurity awareness.
        </p>

      </section>


      {/* MODULES */}

      <section className="dashboard-modules">

        <div className="dashboard-section-title">

          <span>LEARNING MODULES</span>

          <h2>
            Continue Learning
          </h2>

        </div>


        <div className="dashboard-module-grid">


          {/* PHISHING */}

          <div className="dashboard-module-card">

            <div className="module-top">

              <div className="module-number">
                01
              </div>

              {phishingCompleted ? (
                <CheckCircle2 className="completed-icon" />
              ) : (
                <Circle className="pending-icon" />
              )}

            </div>

            <h3>
              Phishing Awareness
            </h3>

            <p>
              Learn how to identify suspicious messages,
              links and requests for sensitive information.
            </p>

            <button
              onClick={() =>
                navigate("/phishing")
              }
            >
              {phishingCompleted
                ? "Review Module"
                : "Start Module"}

              <ArrowRight size={16} />
            </button>

          </div>


          {/* SCAMS */}

          <div className="dashboard-module-card">

            <div className="module-top">

              <div className="module-number">
                02
              </div>

              {scamsCompleted ? (
                <CheckCircle2 className="completed-icon" />
              ) : (
                <Circle className="pending-icon" />
              )}

            </div>

            <h3>
              Scam Awareness
            </h3>

            <p>
              Understand common online scams and learn
              how to recognize suspicious offers.
            </p>

            <button
              onClick={() =>
                navigate("/scams")
              }
            >
              {scamsCompleted
                ? "Review Module"
                : "Start Module"}

              <ArrowRight size={16} />
            </button>

          </div>


          {/* FRAUD */}

          <div className="dashboard-module-card">

            <div className="module-top">

              <div className="module-number">
                03
              </div>

              {fraudCompleted ? (
                <CheckCircle2 className="completed-icon" />
              ) : (
                <Circle className="pending-icon" />
              )}

            </div>

            <h3>
              Fraud Detection
            </h3>

            <p>
              Develop practical skills to identify
              suspicious activities and transactions.
            </p>

            <button
              onClick={() =>
                navigate("/fraud-detection")
              }
            >
              {fraudCompleted
                ? "Review Module"
                : "Start Module"}

              <ArrowRight size={16} />
            </button>

          </div>

        </div>

      </section>


      {/* PROFILE */}

      <section className="dashboard-profile">

        <div className="profile-icon">
          <User size={25} />
        </div>

        <div>

          <span>LEARNER PROFILE</span>

          <h3>
            {userName}
          </h3>

          <p>
            {userEmail}
          </p>

        </div>

      </section>


      {/* QUIZ CTA */}

      <section className="dashboard-quiz">

        <div>

          <Trophy size={35} />

          <div>

            <span>FINAL AWARENESS CHECK</span>

            <h2>
              Test Your Cybersecurity Knowledge
            </h2>

            <p>
              Take the awareness quiz and check your understanding
              of phishing, scams and fraud detection.
            </p>

          </div>

        </div>


        <button
          onClick={() =>
            navigate("/quiz")
          }
        >
          Take Quiz
          <ArrowRight size={17} />
        </button>

      </section>

    </div>
  );
}

export default Dashboard;