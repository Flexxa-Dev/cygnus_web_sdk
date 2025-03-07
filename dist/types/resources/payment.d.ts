export function confirmPayment(sdk: any): Promise<void>;
export function startPayment(sdk: any, { amount, externalUserId, currency, metadata }: {
    amount: any;
    externalUserId: any;
    currency?: string | undefined;
    metadata?: {} | undefined;
}): Promise<void>;
export function createPaymentIntent(sdk: any, { amount, currency, metadata }: {
    amount: any;
    currency: any;
    metadata: any;
}): Promise<any>;
