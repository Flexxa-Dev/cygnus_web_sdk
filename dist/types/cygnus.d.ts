export class MerchantSDK {
    constructor({ apiKey, theme, metadata, redirectUrl, companyName, ...props }: {
        [x: string]: any;
        apiKey: any;
        theme?: {} | undefined;
        metadata?: {} | undefined;
        redirectUrl: any;
        companyName: any;
    });
    apiKey: any;
    stripePublicKey: string;
    stripeSecretKey: string;
    companyName: any;
    redirectUrl: any;
    theme: {
        primaryColor: any;
        backgroundColor: any;
        fontColor: any;
        buttonText: any;
        buttonTextColor: any;
        secondaryColor: any;
        zIndex: any;
    };
    stripe: import("@stripe/stripe-js").Stripe | null;
    elements: any;
    paymentIntent: any;
    eventListeners: {};
    metadata: {};
    _getAuthHeaders(): Promise<{
        Authorization: string;
        'X-api-key': any;
    }>;
    initializeStripe(): Promise<void>;
    applyTheme(): void;
    startPayment(options: any): Promise<void>;
    confirmPayment(): Promise<void>;
    processCryptoPurchase(paymentIntent: any): Promise<void>;
    createPaymentIntent({ amount, currency, metadata }: {
        amount: any;
        currency: any;
        metadata: any;
    }): Promise<any>;
    on(event: any, callback: any): void;
    triggerEvent(event: any, data: any): void;
    #private;
}
