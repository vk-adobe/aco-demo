import { Amount } from './amount';
import { LineItem } from './lineItem';
import { Split } from './split';
export declare class PaymentAmountUpdateResponse {
    'amount': Amount;
    /**
    * The reason for the amount update. Possible values:  * **delayedCharge**  * **noShow**  * **installment**
    */
    'industryUsage'?: PaymentAmountUpdateResponse.IndustryUsageEnum;
    /**
    * Price and product information of the refunded items, required for [partial refunds](https://docs.adyen.com/online-payments/refund#refund-a-payment). > This field is required for partial refunds with 3x 4x Oney, Affirm, Afterpay, Atome, Clearpay, Klarna, Ratepay, Walley, and Zip.
    */
    'lineItems'?: Array<LineItem>;
    /**
    * The merchant account that is used to process the payment.
    */
    'merchantAccount': string;
    /**
    * The [`pspReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference) of the payment to update.
    */
    'paymentPspReference': string;
    /**
    * Adyen\'s 16-character reference associated with the amount update request.
    */
    'pspReference': string;
    /**
    * Your reference for the amount update request. Maximum length: 80 characters.
    */
    'reference': string;
    /**
    * An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For more information, see how to process payments for [marketplaces](https://docs.adyen.com/marketplaces/process-payments) or [platforms](https://docs.adyen.com/platforms/process-payments).
    */
    'splits'?: Array<Split>;
    /**
    * The status of your request. This will always have the value **received**.
    */
    'status': PaymentAmountUpdateResponse.StatusEnum;
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
export declare namespace PaymentAmountUpdateResponse {
    enum IndustryUsageEnum {
        DelayedCharge = "delayedCharge",
        Installment = "installment",
        NoShow = "noShow"
    }
    enum StatusEnum {
        Received = "received"
    }
}
