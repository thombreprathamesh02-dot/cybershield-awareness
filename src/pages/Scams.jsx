import {
  TriangleAlert,
  BriefcaseBusiness,
  ShoppingCart,
  CreditCard,
  Smartphone,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

function Scams() {
  return (
    <div className="inner-page">

      <section className="inner-hero">
        <div className="inner-hero-content">

          <div className="page-badge">
            <TriangleAlert size={17} />
            MODULE 02
          </div>

          <h1>Scam Awareness</h1>

          <p>
            Learn about common online scams, understand their warning
            signs, and develop safer habits when dealing with unexpected
            offers, requests and online opportunities.
          </p>

        </div>
      </section>


      <section className="content-section">

        <div className="section-title">
          <span>SCAM AWARENESS</span>
          <h2>Common Types of Online Scams</h2>
        </div>

        <div className="learning-grid">

          <div className="learning-card">
            <div className="learning-icon">
              <BriefcaseBusiness size={25} />
            </div>

            <h3>Job Scams</h3>

            <p>
              Fake job offers may promise easy income or attractive
              opportunities while requesting personal information or
              payments.
            </p>
          </div>


          <div className="learning-card">
            <div className="learning-icon">
              <ShoppingCart size={25} />
            </div>

            <h3>Shopping Scams</h3>

            <p>
              Fake stores, misleading offers and suspicious sellers
              can make online shopping unsafe.
            </p>
          </div>


          <div className="learning-card">
            <div className="learning-icon">
              <CreditCard size={25} />
            </div>

            <h3>Payment Scams</h3>

            <p>
              Be cautious of unexpected payment requests, fake refunds
              and unusual instructions involving money.
            </p>
          </div>


          <div className="learning-card">
            <div className="learning-icon">
              <Smartphone size={25} />
            </div>

            <h3>Social Media Scams</h3>

            <p>
              Fake profiles, misleading messages and impersonation can
              be used to manipulate users.
            </p>
          </div>

        </div>

      </section>


      <section className="content-section dark-section">

        <div className="section-title">
          <span>WARNING SIGNS</span>
          <h2>How to Recognize a Scam</h2>
        </div>

        <div className="safety-list">

          <div className="safety-row">
            <CheckCircle2 />
            <div>
              <h3>Unrealistic Offers</h3>
              <p>
                Be cautious when an offer appears unusually attractive
                or promises guaranteed results.
              </p>
            </div>
          </div>

          <div className="safety-row">
            <CheckCircle2 />
            <div>
              <h3>Pressure to Act Quickly</h3>
              <p>
                Scammers may create urgency to prevent people from
                taking time to verify information.
              </p>
            </div>
          </div>

          <div className="safety-row">
            <CheckCircle2 />
            <div>
              <h3>Unexpected Payment Requests</h3>
              <p>
                Verify unusual requests for money or payment before
                taking any action.
              </p>
            </div>
          </div>

          <div className="safety-row">
            <CheckCircle2 />
            <div>
              <h3>Unknown Sources</h3>
              <p>
                Verify organizations, sellers and individuals through
                trusted or official channels.
              </p>
            </div>
          </div>

        </div>

      </section>


      <section className="content-section">

        <div className="section-title">
          <span>SMART HABITS</span>
          <h2>Stay Safe Online</h2>
        </div>

        <div className="info-box">

          <p>
            Take time to verify unexpected offers and requests before
            responding. Do not make decisions based only on urgency,
            attractive promises or messages from unknown sources.
          </p>

          <p>
            When in doubt, independently find the organization's
            official contact information and verify the information
            through a trusted channel.
          </p>

        </div>

      </section>


      <section className="module-cta">

        <h2>Next: Learn Fraud Detection</h2>

        <p>
          Continue your awareness journey and learn how to identify
          suspicious activity and common fraud warning signs.
        </p>

        <a href="/fraud-detection" className="primary-btn">
          Continue to Fraud Detection
          <ArrowRight size={18} />
        </a>

      </section>

    </div>
  );
}

export default Scams;