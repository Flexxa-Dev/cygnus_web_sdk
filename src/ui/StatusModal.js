import { paymentStyles } from "../styles/payment.js";

export function createStatusModal(type, message) {
  // Check if we're in a browser environment
  if (typeof document === "undefined") {
    console.error("Document is not available. Cannot create status modal.");
    return;
  }

  const container = document.getElementById("payment-element");

  // Safety check - if container doesn't exist, create a fallback
  if (!container) {
    console.warn(
      "Payment element container not found, creating fallback container"
    );
    const fallbackContainer = document.createElement("div");
    fallbackContainer.id = "payment-element";

    // Try to find payment-container as parent
    const paymentContainer = document.getElementById("payment-container");
    if (paymentContainer) {
      // Find a suitable location within payment-container
      const modalContent = paymentContainer.querySelector(
        ".payment-modal-content"
      );
      if (modalContent) {
        // Replace existing payment-element or append new one
        const existingElement = modalContent.querySelector("#payment-element");
        if (existingElement) {
          modalContent.replaceChild(fallbackContainer, existingElement);
        } else {
          modalContent.appendChild(fallbackContainer);
        }
      } else {
        // Append to payment-container if modal content not found
        paymentContainer.appendChild(fallbackContainer);
      }
    } else {
      // Last resort - append to body
      document.body.appendChild(fallbackContainer);
    }

    return createStatusModal(type, message); // Retry with new container
  }

  const iconSize = "64px";

  const successHTML = `
    <div class="status-modal">
      <div class="status-icon success">
        <svg viewBox="0 0 52 52" width="${iconSize}" height="${iconSize}">
          <circle class="success-circle" cx="26" cy="26" r="25" fill="none" stroke="#4CAF50" stroke-width="2"/>
          <path class="success-checkmark" fill="none" stroke="#4CAF50" stroke-width="3" 
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
          />
        </svg>
      </div>
      <h3>Payment Successful!</h3>
      <p>${message || "Your payment has been processed successfully."}</p>
    </div>
  `;

  const errorHTML = `
    <div class="status-modal">
      <div class="status-icon error">
        <svg viewBox="0 0 52 52" width="${iconSize}" height="${iconSize}">
          <circle cx="26" cy="26" r="25" fill="none" stroke="#FF5252" stroke-width="2"/>
          <path stroke="#FF5252" stroke-width="3" 
            d="M16 16 L36 36 M36 16 L16 36"
          />
        </svg>
      </div>
      <h3>Payment Failed</h3>
      <p>${message || "There was an error processing your payment."}</p>
    </div>
  `;

  // Add animations to document if not already present
  try {
    if (!document.getElementById("payment-animations")) {
      const styleSheet = document.createElement("style");
      styleSheet.id = "payment-animations";
      styleSheet.textContent = paymentStyles.animations;
      document.head.appendChild(styleSheet);
    }

    container.innerHTML = type === "success" ? successHTML : errorHTML;

    // Apply styles
    const statusModal = container.querySelector(".status-modal");
    if (statusModal) {
      const statusIcon = container.querySelector(".status-icon");
      const title = container.querySelector("h3");
      const text = container.querySelector("p");

      Object.assign(statusModal.style, paymentStyles.statusModal.container);

      if (statusIcon) {
        Object.assign(statusIcon.style, paymentStyles.statusModal.icon.wrapper);
        Object.assign(
          statusIcon.style,
          type === "success"
            ? paymentStyles.statusModal.icon.success
            : paymentStyles.statusModal.icon.error
        );
      }

      if (title) {
        Object.assign(title.style, paymentStyles.statusModal.title);
        Object.assign(
          title.style,
          type === "success"
            ? paymentStyles.statusModal.titleSuccess
            : paymentStyles.statusModal.titleError
        );
      }

      if (text) {
        Object.assign(text.style, paymentStyles.statusModal.message);
      }
    }
  } catch (error) {
    console.error("Error creating status modal:", error);
  }
}
