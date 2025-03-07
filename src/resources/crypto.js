import { createStatusModal } from "../ui/StatusModal.js";

export async function processCryptoPurchase(sdk, paymentIntent) {
  console.log("⏳ Simulating Crypto Purchase...");

  // Check if we're in a browser environment
  if (typeof document === "undefined") {
    console.error(
      "Document is not available. Cannot process crypto purchase in this environment."
    );
    sdk.triggerEvent("cryptoFailed", { error: "Browser environment required" });
    return;
  }

  const container = document.getElementById("payment-container");

  // Safety check
  if (!container) {
    console.error("Payment container not found");
    sdk.triggerEvent("cryptoFailed", { error: "Payment container not found" });
    return;
  }

  setTimeout(() => {
    const isSuccess = Math.random() > 0.1;
    if (isSuccess) {
      const mockCryptoTransaction = {
        paymentIntentId: paymentIntent.id,
        cryptoAmount: 0.95,
        conversionRate: 0.95,
        transactionHash: "0xmockhash123",
        status: "completed",
      };
      console.log("✅ Crypto Mocked Successfully!", mockCryptoTransaction);

      try {
        createStatusModal("cryptoSuccess", mockCryptoTransaction);
        container.successPayment();
        sdk.triggerEvent("cryptoDeposited", mockCryptoTransaction);
      } catch (error) {
        console.error("Error handling successful crypto transaction:", error);
        sdk.triggerEvent("cryptoDeposited", {
          ...mockCryptoTransaction,
          uiError: true,
        });
      }
    } else {
      console.error("❌ Crypto Purchase Failed (Mock)");

      try {
        createStatusModal("error", "Failed to process crypto purchase");
        container.failedPayment();
        sdk.triggerEvent("cryptoFailed", { error: "Mock crypto failure" });
      } catch (error) {
        console.error("Error handling failed crypto transaction:", error);
        sdk.triggerEvent("cryptoFailed", {
          error: "Mock crypto failure",
          uiError: true,
        });
      }
    }
  }, 2000);
}
