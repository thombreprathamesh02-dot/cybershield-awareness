import {
  SearchCheck,
  ShieldAlert,
  Eye,
  CreditCard,
  UserRoundCheck,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

function FraudDetection() {
  return (
    <div className="inner-page">

      <section className="inner-hero">

        <div className="inner-hero-content">

          <div className="page-badge">
            <SearchCheck size={17} />
            MODULE 03
          </div>

          <h1>Fraud Detection</h1>

          <p>
            Learn how to identify suspicious activity, verify
            information and recognize common warning signs associated
            with online fraud.
          </p>

        </div>

      </section>


      <section className="content-section">

        <div className="section-title">
          <span>DETECT THE WARNING SIGNS</span>
          <h2>What Should You Check?</h2>
        </div>

        <div className="learning-grid">

          <div className="learning-card">
            <div className="learning-icon">
              <Eye size={25} />
            </div>

            <h3>Check the Source</h3>

            <p>
              Verify whether the message, website or request comes
              from a legitimate and trusted source.
            </p>
          </div>


          <div className="learning-card">
            <div className="learning-icon">
              <ShieldAlert size={25} />
            </div>

            <h3>Look for Red Flags</h3>

            <p>
              Watch for unusual requests, pressure, suspicious links
              or information that does not appear trustworthy.
            </p>
          </div>


          <div className="learning-card">
            <div className="learning-icon">
              <CreditCard size={25} />
            </div>

            <h3>Verify Payments</h3>

            <p>
              Review unexpected payment requests carefully and verify
              them through an independent trusted channel.
            </p>
          </div>

        </div>

      </section>


      <section className="content-section dark-section">

        <div className="section-title">
          <span>FRAUD DETECTION CHECKLIST</span>
          <h2>Before You Take Action</h2>
        </div>

        <div className="safety-list">

          <div className="safety-row">
            <CheckCircle2 />
            <div>
              <h3>Stop and Think</h3>
              <p>
                Do not act immediately when a message creates
                unnecessary pressure or fear.
              </p>
            </div>
          </div>

          <div className="safety-row">
            <CheckCircle2 />
            <div>
              <h3>Verify Independently</h3>
              <p>
                Contact the organization using independently obtained
                official contact details.
              </p>
            </div>
          </div>

          <div className="safety-row">
            <CheckCircle2 />
            <div>
              <h3>Protect Your Information</h3>
              <p>
                Avoid sharing passwords, OTPs, PINs or other sensitive
                information with unexpected contacts.
              </p>
            </div>
          </div>

          <div className="safety-row">
            <CheckCircle2 />
            <div>
              <h3>Review Before Paying</h3>
              <p>
                Carefully check payment details and the purpose of a
                transaction before confirming it.
              </p>
            </div>
          </div>

        </div>

      </section>


      <section className="content-section">

        <div className="section-title">
          <span>SMART VERIFICATION</span>
          <h2>Remember the 4-Step Check</h2>
        </div>

        <div className="verification-grid">

          <div className="verification-card">
            <strong>01</strong>
            <UserRoundCheck size={24} />
            <h3>Verify</h3>
            <p>Check the identity and source.</p>
          </div>

          <div className="verification-card">
            <strong>02</strong>
            <Eye size={24} />
            <h3>Inspect</h3>
            <p>Look carefully for warning signs.</p>
          </div>

          <div className="verification-card">
            <strong>03</strong>
            <ShieldAlert size={24} />
            <h3>Pause</h3>
            <p>Do not act under unnecessary pressure.</p>
          </div>

          <div className="verification-card">
            <strong>04</strong>
            <CheckCircle2 size={24} />
            <h3>Confirm</h3>
            <p>Use a trusted channel to confirm.</p>
          </div>

        </div>

      </section>


      <section className="module-cta">

        <h2>Build Safer Online Habits</h2>

        <p>
          Learn practical safety practices for everyday digital
          activities.
        </p>

        <a href="/safety" className="primary-btn">
          Explore Safety Tips
          <ArrowRight size={18} />
        </a>

      </section>

    </div>
  );
}

export default FraudDetection;