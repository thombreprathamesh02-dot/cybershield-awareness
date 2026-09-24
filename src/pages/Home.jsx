import {
  ShieldCheck,
  ArrowRight,
  Fish,
  TriangleAlert,
  SearchCheck,
  LockKeyhole,
  CheckCircle2
} from "lucide-react";

function Home() {
  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-container">

          <div className="hero-content">

            <div className="hero-badge">
              <ShieldCheck size={16} />
              Cybersecurity Awareness Program
            </div>

            <h1>
              Think Before
              <span> You Click.</span>
            </h1>

            <p>
              Learn how to identify phishing, scams and online fraud
              before they put your personal information, accounts and
              money at risk.
            </p>

            <div className="hero-buttons">

              <a href="/phishing" className="primary-btn">
                Start Learning
                <ArrowRight size={18} />
              </a>

              <a href="/quiz" className="secondary-btn">
                Take Awareness Quiz
              </a>

            </div>

            <div className="hero-trust">
              <CheckCircle2 size={17} />
              <span>Learn • Identify • Protect</span>
            </div>

          </div>

          <div className="hero-visual">

            <div className="security-orbit orbit-one"></div>
            <div className="security-orbit orbit-two"></div>

            <div className="shield-card">
              <ShieldCheck size={100} strokeWidth={1.2} />

              <div className="shield-status">
                <span></span>
                Awareness Active
              </div>
            </div>

            <div className="floating-card card-top">
              <Fish size={20} />
              <div>
                <strong>Phishing</strong>
                <small>Suspicious links</small>
              </div>
            </div>

            <div className="floating-card card-bottom">
              <TriangleAlert size={20} />
              <div>
                <strong>Scam Alert</strong>
                <small>Stay cautious</small>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* THREAT SECTION */}
      <section className="threat-section">

        <div className="section-heading">
          <span>KNOW THE THREATS</span>

          <h2>
            Understand the risks
            <br />
            before they reach you.
          </h2>

          <p>
            Awareness is one of the most important steps toward
            protecting yourself from online threats.
          </p>
        </div>

        <div className="threat-grid">

          <div className="threat-card">

            <div className="threat-icon phishing-icon">
              <Fish size={28} />
            </div>

            <span className="card-number">01</span>

            <h3>Phishing</h3>

            <p>
              Learn how deceptive emails, messages and websites can
              attempt to trick users into revealing sensitive information.
            </p>

            <a href="/phishing">
              Explore Phishing
              <ArrowRight size={16} />
            </a>

          </div>


          <div className="threat-card">

            <div className="threat-icon scam-icon">
              <TriangleAlert size={28} />
            </div>

            <span className="card-number">02</span>

            <h3>Scams</h3>

            <p>
              Understand common online scams and recognize warning
              signs before responding to suspicious requests.
            </p>

            <a href="/scams">
              Explore Scams
              <ArrowRight size={16} />
            </a>

          </div>


          <div className="threat-card">

            <div className="threat-icon fraud-icon">
              <SearchCheck size={28} />
            </div>

            <span className="card-number">03</span>

            <h3>Fraud Detection</h3>

            <p>
              Develop practical skills to identify unusual transactions,
              misleading information and suspicious online activity.
            </p>

            <a href="/fraud-detection">
              Detect Fraud
              <ArrowRight size={16} />
            </a>

          </div>

        </div>

      </section>


      {/* WARNING SIGNS */}
      <section className="warning-section">

        <div className="warning-container">

          <div className="warning-content">

            <span className="section-label">
              RED FLAGS
            </span>

            <h2>
              Can you spot the
              <span> warning signs?</span>
            </h2>

            <p>
              Suspicious online activity often contains clues.
              Learning these common warning signs can help you
              make safer decisions.
            </p>

            <a href="/fraud-detection" className="primary-btn">
              Learn Detection Skills
              <ArrowRight size={18} />
            </a>

          </div>


          <div className="warning-list">

            <div className="warning-item">
              <div className="warning-check">
                <LockKeyhole size={20} />
              </div>

              <div>
                <h3>Unexpected Requests</h3>
                <p>
                  Be cautious when someone unexpectedly asks for
                  sensitive information.
                </p>
              </div>
            </div>


            <div className="warning-item">
              <div className="warning-check">
                <TriangleAlert size={20} />
              </div>

              <div>
                <h3>Urgent Messages</h3>
                <p>
                  Messages that create unnecessary pressure deserve
                  careful verification.
                </p>
              </div>
            </div>


            <div className="warning-item">
              <div className="warning-check">
                <SearchCheck size={20} />
              </div>

              <div>
                <h3>Unknown Links</h3>
                <p>
                  Verify links and websites before entering any
                  personal information.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* SAFETY CTA */}
      <section className="home-cta">

        <div className="cta-content">

          <ShieldCheck size={45} />

          <h2>
            Stay informed. Stay protected.
          </h2>

          <p>
            Build better online safety habits with CyberShield
            Awareness Program.
          </p>

          <a href="/safety" className="cta-btn">
            Explore Safety Tips
            <ArrowRight size={18} />
          </a>

        </div>

      </section>

    </div>
  );
}

export default Home;