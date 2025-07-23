import { Amount } from './amount';
import { LineItem } from './lineItem';
import { Split } from './split';
export declare class PaymentRefundResponse {
    'amount': Amount;
    /**
    * This is only available for PayPal refunds. The [`pspReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference) of the specific capture to refund.
    */
    'capturePspReference'?: string;
    /**
    * Price and product information of the refunded items, required for [partial refunds](https://docs.adyen.com/online-payments/refund#refund-a-payment). > This field is required for partial refunds with 3x 4x Oney, Affirm, Afterpay, Atome, Clearpay, Klarna, Ratepay, Walley, and Zip.
    */
    'lineItems'?: Array<LineItem>;
    /**
    * The merchant account that is used to process the payment.
    */
    'merchantAccount': string;
    /**
    * Your reason for the refund request.
    */
    'merchantRefundReason'?: PaymentRefundResponse.MerchantRefundReasonEnum | null;
    /**
    * The [`pspReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference) of the payment to refund.
    */
    'paymentPspReference': string;
    /**
    * Adyen\'s 16-character reference associated with the refund request.
    */
    'pspReference': string;
    /**
    * Your reference for the refund request.
    */
    'reference'?: string;
    /**
    * An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For more information, see how to process payments for [marketplaces](https://docs.adyen.com/marketplaces/split-payments) or [platforms](https://docs.adyen.com/platforms/online-payments/split-payments/).
    */
    'splits'?: Array<Split>;
    /**
    * The status of your request. This will always have the value **received**.
    */
    'status': PaymentRefundResponse.StatusEnum;
    /**
    * The online store or [physical store](https://docs.adyen.com/point-of-sale/design-your-integration/determine-account-structure/#create-stores) that is processing the refund. This must be the same as the store name configured in your Customer Area.  Otherwise, you get an error and the refund fails.
    */
    'store'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace PaymentRefundResponse {
    enum MerchantRefundReasonEnum {
        Fraud = "FRAUD",
        CustomerRequest = "CUSTOMER REQUEST",
        Return = "RETURN",
        Duplicate = "DUPLICATE",
        Other = "OTHER"
    }
    enum StatusEnum {
        Received = "received"
    }
}
