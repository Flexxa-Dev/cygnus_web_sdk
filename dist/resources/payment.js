import { loadStripe } from "@stripe/stripe-js";
import { processCryptoPurchase } from "./crypto.js";
import { createPaymentModal } from "../ui/PaymentModal.js";
import { createStatusModal } from "../ui/StatusModal.js";
const API_URL = "https://staging.flexxa.io";
export async function confirmPayment(sdk) {
    if (!sdk.elements) {
        console.error("Stripe Elements not initialized properly");
        return;
    }
    const container = document.getElementById("payment-container");
    container.disablePayButton();
    container.disableCloseButton();
    console.log("⏳ Confirming Payment...");
    const result = await sdk.stripe.confirmPayment({
        elements: sdk.elements,
        confirmParams: {},
        redirect: "if_required",
    });
    if (result.error) {
        console.error("❌ Payment Failed:", result.error.message);
        sdk.triggerEvent("paymentFailed", { error: result.error.message });
        createStatusModal("error", result.error.message);
        container.failedPayment();
        container.enableCloseButton();
    }
    else if (result.paymentIntent?.status === "succeeded") {
        console.log("✅ Payment Successful:", result.paymentIntent);
        sdk.triggerEvent("paymentSuccess", result.paymentIntent);
        createStatusModal("success");
        container.successPayment();
        setTimeout(() => {
            if (sdk.redirectUrl) {
                window.open(sdk.redirectUrl, "_blank");
                container.closeModal();
            }
            else {
                container.closeModal();
            }
        }, 2000);
    }
    else {
        console.warn("⚠️ Payment not completed. Status:", result.paymentIntent?.status);
        createStatusModal("error", "Payment not completed. Please try again.");
        container.enablePayButton();
        container.enableCloseButton();
    }
}
export async function startPayment(sdk, { amount, externalUserId, currency = "usd", metadata = {} }) {
    try {
        await initializeStripe(sdk);
        sdk.applyTheme();
        clearPreviousUI();
        ensurePaymentUI(sdk, { ...metadata, amount, currency });
        console.log("🔍 Metadata:", metadata);
        sdk.paymentIntent = await createPaymentIntent(sdk, {
            amount,
            currency,
            metadata,
        });
        console.log("🔍 Received PaymentIntent Response:", sdk.paymentIntent);
        if (!sdk.paymentIntent) {
            const errorMessage = sdk.lastError?.message || "Internal server error";
            sdk.triggerEvent("paymentFailed", {
                error: errorMessage,
            });
            createStatusModal("error", errorMessage);
            return;
        }
        sdk.elements = sdk.stripe.elements({
            clientSecret: sdk.paymentIntent,
        });
        const paymentElement = sdk.elements.create("payment");
        paymentElement.mount("#payment-element");
        paymentElement.on("ready", () => {
            const container = document.getElementById("payment-container");
            container.enablePayButton();
        });
    }
    catch (error) {
        console.error("❌ Payment Initialization Failed:", error);
        sdk.triggerEvent("paymentFailed", { error: error.message });
        createStatusModal("error", error.message);
        const container = document.getElementById("payment-container");
        if (container) {
            container.failedPayment();
        }
    }
}
// Helper functions
async function initializeSDK(apiKey) {
    try {
        const response = await fetch(`${API_URL}/v1/payment/sdk/init`, {
            method: "POST",
            headers: {
                "x-api-key": apiKey,
            },
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to initialize SDK");
        }
        const data = await response.json();
        console.log("🔍 SDK Initialization Response:", data);
        if (!data.data?.providerConfig?.publicKey) {
            throw new Error("Invalid SDK configuration received");
        }
        return {
            stripePublicKey: data.data.providerConfig.publicKey,
            environment: data.data.environment,
            merchantId: data.data.merchantId,
            encryptionKey: data.data.encryptionKey,
            encryptionVersion: data.data.encryptionVersion || 1,
        };
    }
    catch (error) {
        console.error("❌ SDK Initialization Failed:", error);
        throw error;
    }
}
async function initializeStripe(sdk) {
    if (!sdk.stripe || !sdk.encryptionKey) {
        if (!sdk.stripePublicKey || !sdk.encryptionKey) {
            const config = await initializeSDK(sdk.apiKey);
            sdk.stripePublicKey = config.stripePublicKey;
            sdk.environment = config.environment;
            sdk.merchantId = config.merchantId;
            sdk.encryptionKey = config.encryptionKey;
            sdk.encryptionVersion = config.encryptionVersion;
        }
        sdk.stripe = await loadStripe(sdk.stripePublicKey);
        sdk.initialized = true;
    }
}
function clearPreviousUI() {
    const existingContainer = document.getElementById("payment-container");
    if (existingContainer) {
        existingContainer.remove();
    }
    const existingPayButton = document.getElementById("pay-now");
    if (existingPayButton) {
        existingPayButton.remove();
    }
}
export async function createPaymentIntent(sdk, { amount, currency, metadata }) {
    try {
        if (!sdk.encryptionKey) {
            // Ensure encryption key is available from SDK initialization
            if (!sdk.initialized) {
                await initializeStripe(sdk);
            }
            if (!sdk.encryptionKey) {
                throw new Error("Encryption key not available. SDK not properly initialized.");
            }
        }
        const payload = {
            amount: amount,
            externalUserId: metadata.externalUserId || "CUST_TEST",
            metadata: {
                redirectUrl: sdk.redirectUrl,
                ...metadata,
            },
        };
        // Encrypt the payload
        const encryptedData = await encryptPayload(sdk, payload);
        console.log("🔍 Encrypted Data:", encryptedData);
        const response = await fetch(`${API_URL}/v1/payment/sdk/create-order`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": sdk.apiKey,
            },
            body: JSON.stringify({ encryptedData }),
        });
        if (!response.ok) {
            const errorData = await response.json();
            const errorMessage = errorData.message ||
                "Failed to process payment request. Please try again later.";
            console.error("❌ Payment Intent Creation Failed:", {
                status: response.status,
                statusText: response.statusText,
                error: errorData,
            });
            sdk.lastError = { message: errorMessage };
            createStatusModal("error", errorMessage);
            const container = document.getElementById("payment-container");
            if (container) {
                container.failedPayment();
            }
            return null;
        }
        const responseData = await response.json();
        if (!responseData.data?.provider_data?.client_secret) {
            const errorMessage = responseData.error?.message ||
                "Unable to initialize payment. Please contact support if this persists.";
            console.error("❌ Invalid Payment Intent Response:", responseData);
            createStatusModal("error", errorMessage);
            const container = document.getElementById("payment-container");
            if (container) {
                container.failedPayment();
            }
            return null;
        }
        sdk.currentOrderId = payload.metadata.orderId;
        return responseData.data.provider_data.client_secret;
    }
    catch (error) {
        const errorMessage = "An unexpected error occurred while processing your payment. Please try again.";
        console.error("❌ Payment Intent Creation Exception:", error);
        createStatusModal("error", errorMessage);
        const container = document.getElementById("payment-container");
        if (container) {
            container.failedPayment();
        }
        return null;
    }
}
async function encryptPayload(sdk, payload) {
    try {
        // Step 1: Generate a random IV
        const iv = crypto.getRandomValues(new Uint8Array(16));
        // Step 2: Convert the encryption key from base64 to array buffer
        const keyData = base64ToArrayBuffer(sdk.encryptionKey);
        // Step 3: Convert payload to string
        const payloadString = JSON.stringify(payload);
        const payloadBytes = new TextEncoder().encode(payloadString);
        // Step 4: Import the key for GCM mode
        const key = await crypto.subtle.importKey("raw", keyData, { name: "AES-GCM", length: 256 }, false, ["encrypt"]);
        // Step 5: Encrypt with GCM mode
        const encryptedBuffer = await crypto.subtle.encrypt({
            name: "AES-GCM",
            iv: iv,
            tagLength: 128, // 16 bytes for the auth tag
        }, key, payloadBytes);
        // Step 6: In Web Crypto API, the auth tag is appended to the ciphertext
        // We need to separate it for compatibility with Node.js crypto
        // The last 16 bytes (128 bits) of the result is the authentication tag
        const encryptedContent = encryptedBuffer.slice(0, encryptedBuffer.byteLength - 16);
        const authTag = encryptedBuffer.slice(encryptedBuffer.byteLength - 16);
        // Step 7: Combine IV, encrypted data, and auth tag in the format expected by the backend
        const result = {
            iv: arrayBufferToBase64(iv),
            data: arrayBufferToBase64(encryptedContent),
            tag: arrayBufferToBase64(authTag),
        };
        // Step 8: Convert the combined object to base64
        return btoa(JSON.stringify(result));
    }
    catch (error) {
        console.error("Encryption failed:", error);
        throw new Error("Failed to encrypt payment data");
    }
}
// Helper functions
function base64ToArrayBuffer(base64) {
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
}
function arrayBufferToBase64(buffer) {
    const bytes = new Uint8Array(buffer);
    let binary = "";
    for (let i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}
function ensurePaymentUI(sdk, metadata) {
    clearPreviousUI();
    const formattedAmount = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: metadata.currency || "USD",
    }).format(metadata.amount);
    const modal = createPaymentModal(sdk, null, {
        orderId: metadata.orderId || sdk.currentOrderId || "N/A",
        amount: formattedAmount,
    });
    document.body.appendChild(modal);
}
