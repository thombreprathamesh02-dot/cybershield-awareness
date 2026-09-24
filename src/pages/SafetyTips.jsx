import {
  ShieldCheck,
  KeyRound,
  Smartphone,
  Globe,
  CreditCard,
  Users,
  CheckCircle2,
  XCircle
} from "lucide-react";

function SafetyTips() {
  return (
    <div className="inner-page">

      <section className="inner-hero">
        <div className="inner-hero-content">

          <div className="page-badge">
            <ShieldCheck size={17} />
            SAFETY CENTER
          </div>

          <h1>Online Safety Tips</h1>

          <p>
            Follow simple cybersecurity practices to protect your
            accounts, personal information, payments and digital identity.
          </p>

        </div>
      </section>


      <section className="content-section">

        <div className="section-title">
          <span>PROTECT YOURSELF</span>
          <h2>Essential Safety Practices</h2>
        </div>

        <div className="learning-grid">

          <div className="learning-card">
            <div className="learning-icon">
              <KeyRound size={25} />
            </div>

            <h3>Password Security</h3>

            <p>
              Use strong, unique passwords for important accounts and
              avoid sharing them with others.
            </p>
          </div>


          <div className="learning-card">
            <div className="learning-icon">
              <Smartphone size={25} />
            </div>

            <h3>OTP & PIN Safety</h3>

            <p>
              Never share OTPs, PINs or authentication codes with
              unexpected callers or messages.
            </p>
          </div>


          <div className="learning-card">
            <div className="learning-icon">
              <Globe size={25} />
            </div>

            <h3>Safe Browsing</h3>

            <p>
              Check websites carefully and prefer official websites
              and trusted applications.
            </p>
          </div>


          <div className="learning-card">
            <div className="learning-icon">
              <CreditCard size={25} />
            </div>

            <h3>Payment Safety</h3>

            <p>
              Review payment details carefully and verify unexpected
              payment requests before completing transactions.
            </p>
          </div>


          <div className="learning-card">
            <div className="learning-icon">
              <Users size={25} />
            </div>

            <h3>Social Media Safety</h3>

            <p>
              Be careful with unknown profiles, suspicious messages
              and requests received through social platforms.
            </p>
          </div>


          <div className="learning-card">
            <div className="learning-icon">
              <ShieldCheck size={25} />
            </div>

            <h3>Privacy Protection</h3>

            <p>
              Share personal information carefully and review privacy
              settings on your digital accounts.
            </p>
          </div>

        </div>

      </section>


      <section className="content-section dark-section">

        <div className="section-title">
          <span>DO'S AND DON'TS</span>
          <h2>Build Safe Digital Habits</h2>
        </div>

        <div className="dos-donts-grid">

          <div className="habit-card">

            <h3>
              <CheckCircle2 />
              Do
            </h3>

            <ul>
              <li>Verify unexpected messages and requests.</li>
              <li>Use official websites and applications.</li>
              <li>Keep your software and security features updated.</li>
              <li>Review transactions before confirming them.</li>
              <li>Report suspicious activity through appropriate channels.</li>
            </ul>

          </div>


          <div className="habit-card danger">

            <h3>
              <XCircle />
              Don't
            </h3>

            <ul>
              <li>Do not share passwords or OTPs.</li>
              <li>Do not click unknown or suspicious links.</li>
              <li>Do not trust unrealistic offers immediately.</li>
              <li>Do not install unknown applications.</li>
              <li>Do not make payments without verification.</li>
            </ul>

          </div>

        </div>

      </section>


      <section className="module-cta">

        <h2>Test Your Cybersecurity Awareness</h2>

        <p>
          Take the interactive quiz and check how well you understand
          phishing, scams and fraud detection.
        </p>

        <a href="/quiz" className="primary-btn">
          Start Awareness Quiz
        </a>

      </section>

    </div>
  );
}

export default SafetyTips;