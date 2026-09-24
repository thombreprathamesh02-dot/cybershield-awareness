import { useState } from "react";
import {
  Brain,
  CheckCircle2,
  XCircle,
  RotateCcw
} from "lucide-react";

const questions = [
  {
    question: "What is phishing?",
    options: [
      "A method of online deception",
      "A computer game",
      "A type of antivirus",
      "A secure payment method"
    ],
    answer: 0
  },

  {
    question: "Which information should never be shared with an unexpected caller?",
    options: [
      "Favorite color",
      "OTP or PIN",
      "Public website name",
      "General news"
    ],
    answer: 1
  },

  {
    question: "What should you do before clicking an unexpected link?",
    options: [
      "Click immediately",
      "Forward it to everyone",
      "Verify the source and destination",
      "Download the attachment"
    ],
    answer: 2
  },

  {
    question: "Which is a common warning sign of a scam?",
    options: [
      "Unrealistic promises",
      "Official documentation",
      "Normal customer support",
      "A verified information source"
    ],
    answer: 0
  },

  {
    question: "What is a safer way to access an important online account?",
    options: [
      "Use an unknown link from a message",
      "Use an official website or trusted app",
      "Use a random website",
      "Share your password with a friend"
    ],
    answer: 1
  },

  {
    question: "What should you do if a message creates unnecessary urgency?",
    options: [
      "Act immediately",
      "Ignore all safety checks",
      "Pause and verify the information",
      "Share the message publicly"
    ],
    answer: 2
  },

  {
    question: "Which practice improves account security?",
    options: [
      "Using the same password everywhere",
      "Sharing passwords",
      "Using strong and unique passwords",
      "Writing passwords publicly"
    ],
    answer: 2
  },

  {
    question: "What should you do before making an unexpected payment?",
    options: [
      "Verify the request",
      "Pay immediately",
      "Ignore the payment details",
      "Share your PIN"
    ],
    answer: 0
  },

  {
    question: "What is an important sign of a suspicious message?",
    options: [
      "Unexpected request for sensitive information",
      "Normal greeting",
      "Known official information",
      "Regular notification"
    ],
    answer: 0
  },

  {
    question: "What is the main goal of cybersecurity awareness?",
    options: [
      "To increase online risks",
      "To help people make safer digital decisions",
      "To share passwords",
      "To avoid using technology"
    ],
    answer: 1
  }
];

function Quiz() {

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[current];

  const handleAnswer = (index) => {

    if (selected !== null) return;

    setSelected(index);

    if (index === question.answer) {
      setScore((prev) => prev + 1);
    }
  };


  const nextQuestion = () => {

    if (current === questions.length - 1) {
      setFinished(true);
      return;
    }

    setCurrent((prev) => prev + 1);
    setSelected(null);
  };


  const restartQuiz = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };


  if (finished) {

    const percentage = Math.round(
      (score / questions.length) * 100
    );

    return (
      <div className="quiz-page">

        <div className="quiz-result">

          <div className="result-icon">
            <CheckCircle2 size={55} />
          </div>

          <span className="result-label">
            QUIZ COMPLETED
          </span>

          <h1>Awareness Result</h1>

          <div className="score-circle">
            <strong>{score}</strong>
            <span>/{questions.length}</span>
          </div>

          <h2>{percentage}% Score</h2>

          <p>
            You have completed the CyberShield Awareness Quiz.
            Continue learning and practice safe digital habits.
          </p>

          <button
            className="primary-btn"
            onClick={restartQuiz}
          >
            <RotateCcw size={18} />
            Retake Quiz
          </button>

        </div>

      </div>
    );
  }


  return (
    <div className="quiz-page">

      <div className="quiz-container">

        <div className="quiz-header">

          <div className="page-badge">
            <Brain size={17} />
            AWARENESS QUIZ
          </div>

          <h1>Test Your Knowledge</h1>

          <p>
            Answer the questions and check your cybersecurity
            awareness.
          </p>

        </div>


        <div className="quiz-progress">

          <div>
            Question {current + 1} of {questions.length}
          </div>

          <div className="progress-track">
            <div
              className="progress-fill"
              style={{
                width:
                  `${((current + 1) / questions.length) * 100}%`
              }}
            ></div>
          </div>

        </div>


        <div className="question-card">

          <span>
            QUESTION {current + 1}
          </span>

          <h2>{question.question}</h2>

          <div className="answer-list">

            {question.options.map((option, index) => {

              let className = "answer-option";

              if (selected !== null) {

                if (index === question.answer) {
                  className += " correct";
                }

                else if (index === selected) {
                  className += " incorrect";
                }
              }

              return (
                <button
                  key={index}
                  className={className}
                  onClick={() => handleAnswer(index)}
                  disabled={selected !== null}
                >
                  <span>{String.fromCharCode(65 + index)}</span>

                  {option}

                  {selected !== null &&
                    index === question.answer && (
                      <CheckCircle2 size={19} />
                    )}

                  {selected !== null &&
                    index === selected &&
                    index !== question.answer && (
                      <XCircle size={19} />
                    )}
                </button>
              );
            })}

          </div>


          {selected !== null && (
            <button
              className="next-question"
              onClick={nextQuestion}
            >
              {current === questions.length - 1
                ? "Finish Quiz"
                : "Next Question"}
            </button>
          )}

        </div>

      </div>

    </div>
  );
}

export default Quiz;