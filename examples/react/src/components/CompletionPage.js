import { useNavigate } from "react-router-dom";

function CompletionPage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="header">
        <h1>Payment Successful!</h1>
        <p className="subtitle">Thank you for your purchase</p>
      </div>
      <div className="completion-message">
        <svg
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#10b981"
          strokeWidth="2"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
        <h2>Your transaction is complete</h2>
      </div>
      <button onClick={() => navigate("/")} className="back-button">
        Back to Home
      </button>
    </div>
  );
}

export default CompletionPage;
