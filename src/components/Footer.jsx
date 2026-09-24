import { ShieldCheck } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <div className="footer-logo">
            <ShieldCheck size={24} />
            <span>CyberShield</span>
          </div>

          <p>
            Building awareness against phishing, scams and online fraud
            through simple and practical cybersecurity education.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/phishing">Phishing</a>
          <a href="/scams">Scams</a>
          <a href="/safety">Safety Tips</a>
        </div>

        <div className="footer-links">
          <h3>Learn</h3>
          <a href="/fraud-detection">Fraud Detection</a>
          <a href="/quiz">Awareness Quiz</a>
          <a href="/about">About Program</a>
          <a href="/contact">Contact</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 CyberShield Awareness Program. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;