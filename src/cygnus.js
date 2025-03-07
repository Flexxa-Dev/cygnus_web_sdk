import {
  startPayment,
  confirmPayment,
  createPaymentIntent,
} from "./resources/payment.js";
import { processCryptoPurchase } from "./resources/crypto.js";

class MerchantSDK {
  #secretToken;

  constructor({
    apiKey,
    theme = {},
    metadata = {},
    redirectUrl,
    companyName,
    ...props
  }) {
    if (!apiKey) {
      throw new Error("apiKey is required");
    }

    // Initialize private fields
    this.#initializeSecretToken();

    // Public fields
    this.apiKey = apiKey;

    // Store company name and redirect URL
    this.companyName = companyName || "Cygnus";
    this.redirectUrl = redirectUrl;

    // Theme configuration
    this.theme = {
      primaryColor: theme.primaryColor || "#0070f4",
      backgroundColor: theme.backgroundColor || "#f5f5f5",
      fontColor: theme.fontColor || "#222",
      buttonText: theme.buttonText || "Proceed to Payment",
      buttonTextColor: theme.buttonTextColor || "#fff",
      secondaryColor: theme.secondaryColor || "#fff",
      zIndex: theme.zIndex || "10000",
    };

    // Initialize other properties
    this.eventListeners = {};
    this.metadata = metadata;
  }

  #initializeSecretToken() {
    // Initialize with secret token

    const secretsData = [
      115, 101, 99, 114, 101, 116, 95, 99, 121, 103, 110, 117, 115, 95, 49, 50,
      51,
    ];
    this.#secretToken = secretsData.reduce(
      (a, c) => a + String.fromCharCode(c ^ 1),
      ""
    );
  }

  #encrypt(data) {
    if (!data) return null;
    const encoder = new TextEncoder();
    const encoded = encoder.encode(data);
    const tokenBytes = encoder.encode(this.#secretToken);

    return encoded.map((byte, i) => byte ^ tokenBytes[i % tokenBytes.length]);
  }

  #decrypt(encryptedData) {
    if (!encryptedData) return null;
    const tokenBytes = new TextEncoder().encode(this.#secretToken);

    const decrypted = new Uint8Array(encryptedData).map(
      (byte, i) => byte ^ tokenBytes[i % tokenBytes.length]
    );
    return new TextDecoder().decode(decrypted);
  }

  async _getAuthHeaders() {
    const token = this.#decrypt(this.#secretToken);
    return {
      Authorization: `Bearer ${token}`,
      "X-api-key": this.apiKey,
    };
  }

  applyTheme() {
    document.body.style.backgroundColor = this.theme.backgroundColor;
    document.body.style.color = this.theme.fontColor;
    const payButton = document.getElementById("pay-now");
    if (payButton) {
      payButton.style.backgroundColor = this.theme.primaryColor;
      payButton.style.color = this.theme.buttonTextColor;
      payButton.innerText = this.theme.buttonText;
      payButton.style.width = "100%";
      payButton.style.padding = "15px";
      payButton.style.fontSize = "18px";
      payButton.style.border = "none";
      payButton.style.cursor = "pointer";
    }
  }

  startPayment(options) {
    return startPayment(this, options);
  }

  confirmPayment() {
    return confirmPayment(this);
  }

  async processCryptoPurchase(paymentIntent) {
    return processCryptoPurchase(this, paymentIntent);
  }

  async createPaymentIntent({ amount, currency, metadata }) {
    return createPaymentIntent(this, { amount, currency, metadata });
  }

  on(event, callback) {
    if (!this.eventListeners[event]) {
      this.eventListeners[event] = [];
    }
    this.eventListeners[event].push(callback);
  }

  triggerEvent(event, data) {
    if (this.eventListeners[event]) {
      this.eventListeners[event].forEach((callback) => callback(data));
    }
  }
}

export { MerchantSDK };
export default MerchantSDK;
