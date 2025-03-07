import { paymentStyles } from '../styles/payment.js';

export function createStatusModal(type, message) {
  const container = document.getElementById('payment-element');
  const iconSize = '64px';

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
      <p>${message || 'Your payment has been processed successfully.'}</p>
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
      <p>${message || 'There was an error processing your payment.'}</p>
    </div>
  `;

  // Add animations to document if not already present
  if (!document.getElementById('payment-animations')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'payment-animations';
    styleSheet.textContent = paymentStyles.animations;
    document.head.appendChild(styleSheet);
  }

  container.innerHTML = type === 'success' ? successHTML : errorHTML;

  // Apply styles
  const statusModal = container.querySelector('.status-modal');
  const statusIcon = container.querySelector('.status-icon');
  const title = container.querySelector('h3');
  const text = container.querySelector('p');

  Object.assign(statusModal.style, paymentStyles.statusModal.container);
  Object.assign(statusIcon.style, paymentStyles.statusModal.icon.wrapper);
  Object.assign(
    statusIcon.style,
    type === 'success'
      ? paymentStyles.statusModal.icon.success
      : paymentStyles.statusModal.icon.error,
  );
  Object.assign(title.style, paymentStyles.statusModal.title);
  Object.assign(
    title.style,
    type === 'success'
      ? paymentStyles.statusModal.titleSuccess
      : paymentStyles.statusModal.titleError,
  );
  Object.assign(text.style, paymentStyles.statusModal.message);
}
