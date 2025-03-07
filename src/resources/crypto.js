import { createStatusModal } from '../ui/StatusModal.js';

export async function processCryptoPurchase(sdk, paymentIntent) {
  console.log('⏳ Simulating Crypto Purchase...');
  const container = document.getElementById('payment-container');

  setTimeout(() => {
    const isSuccess = Math.random() > 0.1;
    if (isSuccess) {
      const mockCryptoTransaction = {
        paymentIntentId: paymentIntent.id,
        cryptoAmount: 0.95,
        conversionRate: 0.95,
        transactionHash: '0xmockhash123',
        status: 'completed',
      };
      console.log('✅ Crypto Mocked Successfully!', mockCryptoTransaction);
      createStatusModal('cryptoSuccess', mockCryptoTransaction);
      container.successPayment();
      sdk.triggerEvent('cryptoDeposited', mockCryptoTransaction);
    } else {
      console.error('❌ Crypto Purchase Failed (Mock)');
      createStatusModal('error', 'Failed to process crypto purchase');
      sdk.triggerEvent('cryptoFailed', { error: 'Mock crypto failure' });
      container.failedPayment();
    }
  }, 2000);
}
