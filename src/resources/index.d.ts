import type { MerchantSDK, PaymentIntent } from '../cygnus';

export interface PaymentResponse {
  data: {
    provider_data: {
      client_secret: string;
    };
  };
  error?: {
    message: string;
  };
}

export function startPayment(
  sdk: MerchantSDK,
  options: {
    amount: number;
    currency?: string;
    externalUserId: string;
    metadata?: {
      customer: {
        email?: string;
        name?: string;
        phone?: string;
        [key: string]: any;
      };
      [key: string]: any;
    };
  },
): Promise<void>;

export function confirmPayment(sdk: MerchantSDK): Promise<void>;

export function createPaymentIntent(
  sdk: MerchantSDK,
  params: {
    amount: number;
    currency?: string;
    externalUserId: string;
    metadata?: {
      customer: {
        email?: string;
        name?: string;
        phone?: string;
      };
      [key: string]: any;
    };
  },
): Promise<string>;

export function processCryptoPurchase(
  sdk: MerchantSDK,
  paymentIntent: PaymentIntent,
): Promise<void>;
