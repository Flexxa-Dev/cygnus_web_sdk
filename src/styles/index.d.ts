export interface PaymentStyles {
  modalOverlay: Record<string, string>;
  modalContent: Record<string, string>;
  modalHeader: Record<string, string>;
  title: Record<string, string>;
  closeButton: Record<string, string>;
  paymentElement: Record<string, string>;
  payButton: Record<string, string>;
  loader: {
    container: Record<string, string>;
    spinner: Record<string, string>;
    text: Record<string, string>;
  };
  statusModal: {
    container: Record<string, string>;
    icon: {
      wrapper: Record<string, string>;
      success: Record<string, string>;
      error: Record<string, string>;
    };
    title: Record<string, string>;
    titleSuccess: Record<string, string>;
    titleError: Record<string, string>;
    message: Record<string, string>;
  };
  animations: string;
  paymentDetails: Record<string, string>;
  companyName: Record<string, string>;
  headerTopRow: Record<string, string>;
  headerBottomRow: Record<string, string>;
  paymentInfo: Record<string, string>;
  orderId: Record<string, string>;
  amountDivider: Record<string, string>;
  amount: Record<string, string>;
}

export const paymentStyles: PaymentStyles;
