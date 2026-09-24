import {
  Fish,
  MailWarning,
  Link2Off,
  ShieldAlert,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

function Phishing() {
  return (
    <div className="inner-page">

      {/* HERO */}
      <section className="inner-hero">
        <div className="inner-hero-content">

          <div className="page-badge">
            <Fish size={17} />
            MODULE 01
          </div>

          <h1>Phishing Awareness</h1>

          <p>
            Learn how phishing attempts work, recognize common warning
            signs, and develop safer habits when dealing with suspicious
            emails, messages and websites.
          </p>

        </div>
      </section>


      {/* WHAT IS PHISHING */}
      <section className="content-section">

        <div className="section-title">
          <span>UNDERSTAND THE THREAT</span>
          <h2>What is Phishing?</h2>
        </div>

        <div className="info-box">
          <p>
            Phishing is a type of online deception where an attacker
            attempts to make a person reveal sensitive information or
            take an unsafe action. Phishing attempts may appear as
            emails, text messages, social media messages or websites
            that imitate legitimate organizations.
          </p>

          <p>
            The goal of awareness is to identify suspicious signals
            before clicking a link, opening an attachment or sharing
            personal information.
          </p>
        </div>

      </section>


      {/* WARNING SIGNS */}
      <section className="content-section dark-section">

        <div className="section-title">
          <span>RED FLAGS</span>
          <h2>Common Warning Signs</h2>
        </div>

        <div className="learning-grid">

          <div className="learning-card">
            <div className="learning-icon">
              <MailWarning size={25} />
            </div>

            <h3>Unexpected Messages</h3>

            <p>
              Be careful with unexpected messages asking you to
              immediately take an action or provide information.
            </p>
          </div>


          <div className="learning-card">
            <div className="learning-icon">
              <Link2Off size={25} />
            </div>

            <h3>Suspicious Links</h3>

            <p>
              Check the destination and source of a link before
              opening it, especially when the message is unexpected.
            </p>
          </div>


          <div className="learning-card">
            <div className="learning-icon">
              <ShieldAlert size={25} />
            </div>

            <h3>Requests for Sensitive Data</h3>

            <p>
              Treat unexpected requests for passwords, OTPs,
              financial information or account details with caution.
            </p>
          </div>

        </div>

      </section>


      {/* SAFETY STEPS */}
      <section className="content-section">

        <div className="section-title">
          <span>STAY PROTECTED</span>
          <h2>How to Stay Safe</h2>
        </div>

        <div className="safety-list">

          <div className="safety-row">
            <CheckCircle2 />
            <div>
              <h3>Verify the Sender</h3>
              <p>
                Check who sent the message and verify the source
                through an official channel when necessary.
              </p>
            </div>
          </div>

          <div className="safety-row">
            <CheckCircle2 />
            <div>
              <h3>Think Before Clicking</h3>
              <p>
                Do not click unexpected links or download unknown
                attachments without checking them first.
              </p>
            </div>
          </div>

          <div className="safety-row">
            <CheckCircle2 />
            <div>
              <h3>Protect Sensitive Information</h3>
              <p>
                Never share passwords, OTPs, PINs or other confidential
                information in response to an unexpected request.
              </p>
            </div>
          </div>

          <div className="safety-row">
            <CheckCircle2 />
            <div>
              <h3>Use Official Sources</h3>
              <p>
                Access important accounts through official websites
                or trusted applications rather than unfamiliar links.
              </p>
            </div>
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="module-cta">

        <h2>Ready to learn about online scams?</h2>

        <p>
          Continue your awareness journey and learn how to recognize
          common scam patterns.
        </p>

        <a href="/scams" className="primary-btn">
          Continue to Scam Awareness
          <ArrowRight size={18} />
        </a>

      </section>

    </div>
  );
}

export default Phishing;