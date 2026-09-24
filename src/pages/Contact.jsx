import {
  Mail,
  MessageSquare,
  ShieldCheck,
  Send
} from "lucide-react";

function Contact() {
  return (
    <div className="inner-page">

      <section className="inner-hero">

        <div className="inner-hero-content">

          <div className="page-badge">
            <MessageSquare size={17} />
            CONTACT
          </div>

          <h1>Contact CyberShield</h1>

          <p>
            Have a question about the awareness program? Send us a
            message and we will be happy to hear from you.
          </p>

        </div>

      </section>


      <section className="contact-section">

        <div className="contact-info">

          <span>GET IN TOUCH</span>

          <h2>
            Let's make the
            <br />
            internet safer.
          </h2>

          <p>
            Cybersecurity awareness starts with learning. If you have
            questions, suggestions or feedback about this program,
            you can use the contact form.
          </p>


          <div className="contact-detail">

            <div>
              <Mail size={21} />
            </div>

            <section>
              <strong>Email</strong>
              <p>cybershield@example.com</p>
            </section>

          </div>


          <div className="contact-detail">

            <div>
              <ShieldCheck size={21} />
            </div>

            <section>
              <strong>Program</strong>
              <p>Phishing, Scam & Fraud Awareness</p>
            </section>

          </div>

        </div>


        <form className="contact-form">

          <h2>Send a Message</h2>

          <label>
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
          />


          <label>
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
          />


          <label>
            Message
          </label>

          <textarea
            rows="6"
            placeholder="Write your message..."
          ></textarea>


          <button type="button" className="primary-btn">
            <Send size={17} />
            Send Message
          </button>

        </form>

      </section>

    </div>
  );
}

export default Contact;