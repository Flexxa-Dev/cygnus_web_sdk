import { paymentStyles } from '../styles/payment.js';

export function createPaymentModal(sdk, onClose, { orderId, amount }) {
  // Add theme colors to root
  const root = document.documentElement;
  root.style.setProperty(
    '--payment-primary-color',
    sdk.theme?.primaryColor || '#0070f3',
  );
  root.style.setProperty(
    '--payment-secondary-color',
    sdk.theme?.secondaryColor || '#fff',
  );

  // Store original body style
  const originalStyle = window.getComputedStyle(document.body);
  const scrollY = window.scrollY;

  // Lock body scroll
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}px`;
  document.body.style.width = '100%';
  document.body.style.overflowY = 'hidden';

  const container = document.createElement('div');
  container.id = 'payment-container';
  container.style.position = 'fixed';
  container.style.inset = '0';
  container.style.zIndex = '2147483647';

  const modalHTML = `
    <div class="payment-modal-overlay">
      <div class="payment-modal-content">
        <div class="payment-modal-header">
          <div class="header-top-row">
            <div class="company-name">${sdk.companyName || 'Merchant'}</div>
            <button class="payment-modal-close" aria-label="Close">×</button>
          </div>
          <div class="payment-info">
            <div class="amount">Amount: ${amount}</div>
          </div>
        </div>
        <div id="payment-element">
          <div id="payment-loader">
            <div class="loader"></div>
            <p>Initializing payment...</p>
          </div>
        </div>
        <button id="pay-now" disabled>Processing...</button>
      </div>
    </div>
  `;

  container.innerHTML = modalHTML;

  // Apply styles
  const overlay = container.querySelector('.payment-modal-overlay');
  const content = container.querySelector('.payment-modal-content');
  const header = container.querySelector('.payment-modal-header');
  const headerTopRow = container.querySelector('.header-top-row');
  const closeBtn = container.querySelector('.payment-modal-close');
  const companyNameEl = container.querySelector('.company-name');
  const amountEl = container.querySelector('.amount');
  const paymentElement = container.querySelector('#payment-element');
  const paymentLoader = container.querySelector('#payment-loader');
  const payButton = container.querySelector('#pay-now');

  Object.assign(overlay.style, paymentStyles.modalOverlay);
  Object.assign(content.style, paymentStyles.modalContent);
  Object.assign(header.style, paymentStyles.modalHeader);
  Object.assign(headerTopRow.style, paymentStyles.headerTopRow);
  Object.assign(closeBtn.style, paymentStyles.closeButton);
  Object.assign(companyNameEl.style, paymentStyles.companyName);
  Object.assign(amountEl.style, paymentStyles.amount);
  Object.assign(paymentElement.style, paymentStyles.paymentElement);
  Object.assign(paymentLoader.style, paymentStyles.loader.container);
  Object.assign(
    paymentLoader.querySelector('.loader').style,
    paymentStyles.loader.spinner,
  );
  Object.assign(
    paymentLoader.querySelector('p').style,
    paymentStyles.loader.text,
  );
  Object.assign(payButton.style, paymentStyles.payButton);

  // Add animations
  const styleSheet = document.createElement('style');
  styleSheet.textContent = paymentStyles.animations;
  document.head.appendChild(styleSheet);

  // Event handlers
  const handleClose = () => {
    // Remove event listeners first
    document.removeEventListener('keydown', handleEscapeKey, true);
    closeBtn.removeEventListener('click', handleCloseClick, true);
    overlay.removeEventListener('click', handleOverlayClick, true);

    // Restore body scroll
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.overflowY = '';
    window.scrollTo(0, scrollY);

    // Remove modal and style elements
    container.remove();
    const modalStyles = document.querySelector('style[data-modal-styles]');
    if (modalStyles) modalStyles.remove();

    // Only trigger event and callback if they exist
    if (sdk && typeof sdk.triggerEvent === 'function') {
      sdk.triggerEvent('modalClosed');
    }
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  // Named event handler functions
  const handleCloseClick = (e) => {
    e.stopPropagation();
    handleClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === overlay) {
      e.stopPropagation();
      handleClose();
    }
  };

  const handleEscapeKey = (e) => {
    if (e.key === 'Escape') {
      e.stopPropagation();
      handleClose();
    }
  };

  // Event listeners with named handlers
  closeBtn.addEventListener('click', handleCloseClick, true);
  overlay.addEventListener('click', handleOverlayClick, true);
  document.addEventListener('keydown', handleEscapeKey, true);

  // Update the close button methods
  container.enableCloseButton = () => {
    const closeBtn = container.querySelector('.payment-modal-close');
    const overlay = container.querySelector('.payment-modal-overlay');

    closeBtn.disabled = false;
    closeBtn.style.opacity = '1';
    closeBtn.style.visibility = 'visible';
    closeBtn.style.pointerEvents = 'auto';
    overlay.style.pointerEvents = 'auto';

    // Re-enable close on escape key
    document.addEventListener('keydown', handleEscapeKey, true);
  };

  container.disableCloseButton = () => {
    const closeBtn = container.querySelector('.payment-modal-close');
    const overlay = container.querySelector('.payment-modal-overlay');

    closeBtn.disabled = true;
    closeBtn.style.opacity = '0';
    closeBtn.style.visibility = 'hidden';
    closeBtn.style.pointerEvents = 'none';
    overlay.style.pointerEvents = 'none';

    // Disable close on escape key
    document.removeEventListener('keydown', handleEscapeKey, true);
  };

  // Setup pay button
  payButton.disabled = true;
  payButton.innerText = 'Processing...';
  payButton.onclick = () => sdk.confirmPayment();

  // Update the pay button methods
  container.enablePayButton = () => {
    payButton.disabled = false;
    payButton.innerText = 'Pay Now';
    container.enableCloseButton();
  };

  container.disablePayButton = () => {
    payButton.disabled = true;
    payButton.innerText = 'Processing...';
    container.disableCloseButton();
  };

  container.failedPayment = (redirectUrl) => {
    payButton.disabled = false;
    payButton.innerText = 'Go Back';
    payButton.style.backgroundColor = '#ff4444';
    payButton.style.color = '#fff';

    // Update header and text colors
    const header = container.querySelector('.payment-modal-header');
    const companyName = container.querySelector('.company-name');
    const amount = container.querySelector('.amount');

    header.style.backgroundColor = '#ff4444';
    header.style.color = '#fff';
    companyName.style.color = '#fff';
    amount.style.color = '#fff';

    payButton.onclick = () => {
      if (redirectUrl) {
        window.location.href = redirectUrl;
      } else {
        handleClose();
      }
    };
    container.enableCloseButton();
  };

  container.successPayment = (redirectUrl) => {
    payButton.disabled = false;
    payButton.innerText = 'Redirecting...';
    payButton.style.backgroundColor = '#4CAF50';
    payButton.style.color = '#fff';

    // Update header and text colors
    const header = container.querySelector('.payment-modal-header');
    const companyName = container.querySelector('.company-name');
    const amount = container.querySelector('.amount');

    header.style.backgroundColor = '#4CAF50';
    header.style.color = '#fff';
    companyName.style.color = '#fff';
    amount.style.color = '#fff';

    payButton.onclick = () => {
      if (redirectUrl) {
        window.location.href = redirectUrl;
      } else {
        handleClose();
      }
    };
    container.enableCloseButton();
  };

  // Add closeModal method to container
  container.closeModal = () => {
    handleClose();
  };

  return container;
}
