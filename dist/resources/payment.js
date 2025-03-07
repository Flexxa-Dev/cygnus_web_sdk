import { loadStripe } from '@stripe/stripe-js';
import { processCryptoPurchase } from './crypto.js';
import { createPaymentModal } from '../ui/PaymentModal.js';
import { createStatusModal } from '../ui/StatusModal.js';
export async function confirmPayment(sdk) {
    if (!sdk.elements) {
        console.error('Stripe Elements not initialized properly');
        return;
    }
    const container = document.getElementById('payment-container');
    container.disablePayButton();
    container.disableCloseButton();
    console.log('⏳ Confirming Payment...');
    const result = await sdk.stripe.confirmPayment({
        elements: sdk.elements,
        confirmParams: {},
        redirect: 'if_required',
    });
    if (result.error) {
        console.error('❌ Payment Failed:', result.error.message);
        sdk.triggerEvent('paymentFailed', { error: result.error.message });
        createStatusModal('error', result.error.message);
        container.failedPayment();
        container.enableCloseButton();
    }
    else if (result.paymentIntent?.status === 'succeeded') {
        console.log('✅ Payment Successful:', result.paymentIntent);
        sdk.triggerEvent('paymentSuccess', result.paymentIntent);
        createStatusModal('success');
        container.successPayment();
        setTimeout(() => {
            if (sdk.redirectUrl) {
                window.open(sdk.redirectUrl, '_blank');
                container.closeModal();
            }
            else {
                container.closeModal();
            }
        }, 2000);
    }
    else {
        console.warn('⚠️ Payment not completed. Status:', result.paymentIntent?.status);
        createStatusModal('error', 'Payment not completed. Please try again.');
        container.enablePayButton();
        container.enableCloseButton();
    }
}
export async function startPayment(sdk, { amount, externalUserId, currency = 'usd', metadata = {} }) {
    try {
        await initializeStripe(sdk);
        sdk.applyTheme();
        clearPreviousUI();
        ensurePaymentUI(sdk, { ...metadata, amount, currency });
        console.log('🔍 Metadata:', metadata);
        sdk.paymentIntent = await createPaymentIntent(sdk, {
            amount,
            currency,
            metadata,
        });
        console.log('🔍 Received PaymentIntent Response:', sdk.paymentIntent);
        if (!sdk.paymentIntent) {
            const errorMessage = sdk.lastError?.message || 'Internal server error';
            sdk.triggerEvent('paymentFailed', {
                error: errorMessage,
            });
            createStatusModal('error', errorMessage);
            return;
        }
        sdk.elements = sdk.stripe.elements({
            clientSecret: sdk.paymentIntent,
        });
        const paymentElement = sdk.elements.create('payment');
        paymentElement.mount('#payment-element');
        paymentElement.on('ready', () => {
            const container = document.getElementById('payment-container');
            container.enablePayButton();
        });
    }
    catch (error) {
        console.error('❌ Payment Initialization Failed:', error);
        sdk.triggerEvent('paymentFailed', { error: error.message });
        createStatusModal('error', error.message);
        const container = document.getElementById('payment-container');
        if (container) {
            container.failedPayment();
        }
    }
}
// Helper functions
async function initializeStripe(sdk) {
    if (!sdk.stripe) {
        sdk.stripe = await loadStripe(sdk.stripePublicKey);
    }
}
function clearPreviousUI() {
    const existingContainer = document.getElementById('payment-container');
    if (existingContainer) {
        existingContainer.remove();
    }
    const existingPayButton = document.getElementById('pay-now');
    if (existingPayButton) {
        existingPayButton.remove();
    }
}
export async function createPaymentIntent(sdk, { amount, currency, metadata }) {
    try {
        const payload = {
            amount: amount,
            externalUserId: metadata.externalUserId || 'CUST_TEST',
            metadata: {
                redirectUrl: sdk.redirectUrl,
                ...metadata,
            },
        };
        const response = await fetch(`${process.env.API_URL}/v1/payments/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': sdk.apiKey,
            },
            body: JSON.stringify(payload),
        });
        if (!response.ok) {
            const errorData = await response.json();
            const errorMessage = errorData.message || 'Server error occurred';
            console.error('❌ Payment Intent Creation Failed:', errorData);
            sdk.lastError = { message: errorMessage };
            createStatusModal('error', errorMessage);
            const container = document.getElementById('payment-container');
            if (container) {
                container.failedPayment();
            }
            return null;
        }
        const responseData = await response.json();
        if (!responseData.data?.provider_data?.client_secret) {
            const errorMessage = responseData.error?.message || 'Invalid payment intent response';
            createStatusModal('error', errorMessage);
            const container = document.getElementById('payment-container');
            if (container) {
                container.failedPayment();
            }
            return null;
        }
        sdk.currentOrderId = payload.metadata.orderId;
        return responseData.data.provider_data.client_secret;
    }
    catch (error) {
        createStatusModal('error', error.message);
        const container = document.getElementById('payment-container');
        if (container) {
            container.failedPayment();
        }
        return null;
    }
}
function ensurePaymentUI(sdk, metadata) {
    clearPreviousUI();
    const formattedAmount = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: metadata.currency || 'USD',
    }).format(metadata.amount);
    const modal = createPaymentModal(sdk, null, {
        orderId: metadata.orderId || sdk.currentOrderId || 'N/A',
        amount: formattedAmount,
    });
    document.body.appendChild(modal);
}
