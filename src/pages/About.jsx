import {
  ShieldCheck,
  Target,
  Users,
  BookOpen,
  CheckCircle2
} from "lucide-react";

function About() {
  return (
    <div className="inner-page">

      {/* HERO */}
      <section className="inner-hero">
        <div className="inner-hero-content">

          <div className="page-badge">
            <ShieldCheck size={17} />
            ABOUT CYBERSHIELD
          </div>

          <h1>Cybersecurity Awareness</h1>

          <p>
            CyberShield Awareness Program is an educational platform
            designed to help users understand phishing, scams, online
            fraud and essential digital safety practices.
          </p>

        </div>
      </section>


      {/* ABOUT PROGRAM */}
      <section className="content-section">

        <div className="section-title">
          <span>OUR PROGRAM</span>
          <h2>Why CyberShield?</h2>
        </div>

        <div className="info-box">

          <p>
            Digital technology has become an important part of everyday
            life. People use online services for communication,
            education, shopping, banking and many other activities.
          </p>

          <p>
            With increased digital activity, awareness about online
            threats has also become important. CyberShield provides
            simple educational information to help users recognize
            suspicious activities and make safer decisions online.
          </p>

        </div>

      </section>


      {/* OBJECTIVES */}
      <section className="content-section dark-section">

        <div className="section-title">
          <span>PROGRAM OBJECTIVES</span>
          <h2>What We Aim to Teach</h2>
        </div>

        <div className="learning-grid">

          <div className="learning-card">

            <div className="learning-icon">
              <Target size={25} />
            </div>

            <h3>Identify Threats</h3>

            <p>
              Help users recognize common phishing, scam and fraud
              warning signs.
            </p>

          </div>


          <div className="learning-card">

            <div className="learning-icon">
              <BookOpen size={25} />
            </div>

            <h3>Build Awareness</h3>

            <p>
              Provide simple and practical cybersecurity knowledge
              for everyday digital activities.
            </p>

          </div>


          <div className="learning-card">

            <div className="learning-icon">
              <Users size={25} />
            </div>

            <h3>Promote Safe Habits</h3>

            <p>
              Encourage responsible online behavior and careful
              decision-making.
            </p>

          </div>

        </div>

      </section>


      {/* LEARNING AREAS */}
      <section className="content-section">

        <div className="section-title">
          <span>LEARNING AREAS</span>
          <h2>What You Can Learn</h2>
        </div>

        <div className="safety-list">

          <div className="safety-row">
            <CheckCircle2 />

            <div>
              <h3>Phishing Awareness</h3>

              <p>
                Understand suspicious emails, messages, links and
                requests for sensitive information.
              </p>
            </div>
          </div>


          <div className="safety-row">
            <CheckCircle2 />

            <div>
              <h3>Scam Awareness</h3>

              <p>
                Learn about common online scams and the warning signs
                that may indicate deceptive activity.
              </p>
            </div>
          </div>


          <div className="safety-row">
            <CheckCircle2 />

            <div>
              <h3>Fraud Detection</h3>

              <p>
                Develop basic skills for verifying information,
                requests and suspicious transactions.
              </p>
            </div>
          </div>


          <div className="safety-row">
            <CheckCircle2 />

            <div>
              <h3>Online Safety</h3>

              <p>
                Follow practical cybersecurity habits to protect
                accounts and personal information.
              </p>
            </div>
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="module-cta">

        <h2>Start Your Cybersecurity Awareness Journey</h2>

        <p>
          Explore the learning modules and test your knowledge with
          the CyberShield Awareness Quiz.
        </p>

        <a href="/phishing" className="primary-btn">
          Start Learning
        </a>

      </section>

    </div>
  );
}

export default About;