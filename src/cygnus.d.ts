interface ThemeConfig {
  primaryColor?: string;
  backgroundColor?: string;
  fontColor?: string;
  buttonText?: string;
  buttonTextColor?: string;
  secondaryColor?: string;
  zIndex?: string;
}

interface SDKMetadata {
  merchantId?: string;
  environment?: string;
  [key: string]: any;
}

interface MerchantSDKConfig {
  apiKey: string;
  theme?: ThemeConfig;
  metadata?: SDKMetadata;
  redirectUrl?: string;
  companyName?: string;
}

interface PaymentOptions {
  amount: number;
  currency: string;
  metadata?: Record<string, any>;
}

interface PaymentIntent {
  id: string;
  amount: number;
  currency: string;
  status: string;
  [key: string]: any;
}

type PaymentEventCallback = (data: any) => void;

declare class MerchantSDK {
  constructor(config: MerchantSDKConfig);

  apiKey: string;
  stripePublicKey: string;
  stripeSecretKey: string;
  companyName: string;
  redirectUrl?: string;
  theme: Required<ThemeConfig>;
  metadata: SDKMetadata;
  stripe: any;
  elements: any;
  paymentIntent: PaymentIntent | null;
  eventListeners: Record<string, PaymentEventCallback[]>;

  initializeStripe(): Promise<void>;
  applyTheme(): void;
  startPayment(options: PaymentOptions): Promise<any>;
  confirmPayment(): Promise<any>;
  processCryptoPurchase(paymentIntent: PaymentIntent): Promise<any>;
  createPaymentIntent(params: PaymentOptions): Promise<PaymentIntent>;
  on(event: string, callback: PaymentEventCallback): void;
  triggerEvent(event: string, data: any): void;
}

export { MerchantSDK };
export type {
  ThemeConfig,
  SDKMetadata,
  MerchantSDKConfig,
  PaymentOptions,
  PaymentIntent,
  PaymentEventCallback,
};
