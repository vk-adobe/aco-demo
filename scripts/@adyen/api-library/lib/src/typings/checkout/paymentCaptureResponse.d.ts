import { Amount } from './amount';
import { LineItem } from './lineItem';
import { PlatformChargebackLogic } from './platformChargebackLogic';
import { Split } from './split';
import { SubMerchantInfo } from './subMerchantInfo';
export declare class PaymentCaptureResponse {
    'amount': Amount;
    /**
    * Price and product information of the refunded items, required for [partial refunds](https://docs.adyen.com/online-payments/refund#refund-a-payment). > This field is required for partial refunds with 3x 4x Oney, Affirm, Afterpay, Atome, Clearpay, Klarna, Ratepay, Walley, and Zip.
    */
    'lineItems'?: Array<LineItem>;
    /**
    * The merchant account that is used to process the payment.
    */
    'merchantAccount': string;
    /**
    * The [`pspReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference) of the payment to capture.
    */
    'paymentPspReference': string;
    'platformChargebackLogic'?: PlatformChargebackLogic | null;
    /**
    * Adyen\'s 16-character reference associated with the capture request.
    */
    'pspReference': string;
    /**
    * Your reference for the capture request.
    */
    'reference'?: string;
    /**
    * An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For more information, see how to process payments for [marketplaces](https://docs.adyen.com/marketplaces/split-payments) or [platforms](https://docs.adyen.com/platforms/online-payments/split-payments/).
    */
    'splits'?: Array<Split>;
    /**
    * The status of your request. This will always have the value **received**.
    */
    'status': PaymentCaptureResponse.StatusEnum;
    /**
    * List of sub-merchants.
    */
    'subMerchants'?: Array<SubMerchantInfo>;
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
export declare namespace PaymentCaptureResponse {
    enum StatusEnum {
        Received = "received"
    }
}
