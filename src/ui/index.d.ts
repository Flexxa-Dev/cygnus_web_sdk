import type { MerchantSDK } from '../cygnus';

export interface PaymentModalContainer extends HTMLDivElement {
  enableCloseButton: () => void;
  disableCloseButton: () => void;
  enablePayButton: () => void;
  disablePayButton: () => void;
  failedPayment: (redirectUrl?: string) => void;
  successPayment: (redirectUrl?: string) => void;
  closeModal: () => void;
}

export function createPaymentModal(
  sdk: MerchantSDK,
  onClose: (() => void) | null,
  options: {
    orderId: string;
    amount: string;
  }
): PaymentModalContainer;

export function createStatusModal(
  type: 'success' | 'error' | 'cryptoSuccess',
  message?: string
): void; 