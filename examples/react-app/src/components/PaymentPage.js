import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MerchantSDK } from "cygnus";

function PaymentPage() {
  const navigate = useNavigate();
  const [consoleMessages, setConsoleMessages] = useState([
    { type: "info", data: "Waiting for payment initiation..." },
  ]);

  const addConsoleMessage = (type, data) => {
    setConsoleMessages((prev) => [...prev, { type, data }]);
  };

  useEffect(() => {
    const sdk = new MerchantSDK({
      apiKey:
        "sk_3_87e7ba8f18c290e4b0cc89cefd15b7e8c096c138d8599065a51ae43f954e267c",
      companyName: "Demo Store",
      theme: {
        primaryColor: "#0070f4",
        backgroundColor: "#f9f9f9",
        fontColor: "#333333",
        buttonText: "Complete Payment",
        buttonTextColor: "#ffffff",
      },
      metadata: {
        environment: "sandbox",
        merchantId: "test_merchant",
      },
    });

    sdk.on("paymentSuccess", (paymentIntent) => {
      console.log("Payment successful!", paymentIntent);
      showToast("Payment completed successfully!", "success");
      addConsoleMessage("success", {
        event: "PAYMENT_SUCCESS",
        data: paymentIntent,
      });
      setTimeout(() => navigate("/complete"), 1500);
    });

    sdk.on("paymentFailed", (error) => {
      console.log("Payment failed:", error);
      showToast(`Payment failed: ${error.message}`, "error");
      addConsoleMessage("error", { event: "PAYMENT_FAILED", error });
    });

    window.cygnusSDK = sdk;
  }, [navigate]);

  const showToast = (message, type) => {
    const toast = document.getElementById("toast");
    if (toast) {
      toast.textContent = message;
      toast.className = `toast ${type}`;
      toast.classList.add("show");

      setTimeout(() => {
        toast.classList.remove("show");
      }, 3000);
    }
  };

  const handlePayment = () => {
    const paymentData = {
      amount: 49.99, // Amount in cents
      currency: "usd",
      externalUserId: "2110990571",
      theme: {
        primaryColor: "#000000",
        secondaryColor: "#ffffff",
        fontColor: "#000000",
        buttonText: "Complete Payment",
        buttonTextColor: "#ffffff",
      },
      metadata: {
        customer: {
          email: "customer@example.com",
          name: "Customer",
          phone: "1234567890",
        },
        orderId: "ORDER_" + Math.floor(Math.random() * 1000000),
        productName: "Premium Subscription",
      },
    };

    addConsoleMessage("info", {
      event: "PAYMENT_INITIATED",
      data: paymentData,
    });
    window.cygnusSDK.startPayment(paymentData);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Cygnus Payment Demo</h1>
        <p className="subtitle">Complete your purchase</p>
      </div>

      <div className="product">
        <div className="product-image">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
            <polyline points="16 21 16 13 8 13 8 21" />
            <path d="M12 3v4" />
            <path d="M8 3h8" />
          </svg>
        </div>
        <div className="product-details">
          <h3>Premium Subscription</h3>
          <p>Get access to all premium features and benefits</p>
          <div className="price">
            $49.99 <span className="price-period">/month</span>
          </div>
          <div className="features">
            <span className="feature">Unlimited Access</span>
            <span className="feature">Premium Support</span>
            <span className="feature">Advanced Features</span>
          </div>
        </div>
      </div>

      <button id="payment-button" onClick={handlePayment}>
        Complete Payment
      </button>

      <div id="toast" className="toast">
        Payment status message
      </div>
    </div>
  );
}

export default PaymentPage;
