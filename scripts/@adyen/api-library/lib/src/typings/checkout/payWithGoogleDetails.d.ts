export declare class PayWithGoogleDetails {
    /**
    * The checkout attempt identifier.
    */
    'checkoutAttemptId'?: string;
    /**
    * The funding source that should be used when multiple sources are available. For Brazilian combo cards, by default the funding source is credit. To use debit, set this value to **debit**.
    */
    'fundingSource'?: PayWithGoogleDetails.FundingSourceEnum;
    /**
    * The `token` that you obtained from the [Google Pay API](https://developers.google.com/pay/api/web/reference/response-objects#PaymentData) `PaymentData` response.
    */
    'googlePayToken': string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    *
    * @deprecated since Adyen Checkout API v49
    * Use `storedPaymentMethodId` instead.
    */
    'recurringDetailReference'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'storedPaymentMethodId'?: string;
    /**
    * Required for mobile integrations. Version of the 3D Secure 2 mobile SDK.
    */
    'threeDS2SdkVersion'?: string;
    /**
    * **paywithgoogle**
    */
    'type'?: PayWithGoogleDetails.TypeEnum;
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
export declare namespace PayWithGoogleDetails {
    enum FundingSourceEnum {
        Credit = "credit",
        Debit = "debit"
    }
    enum TypeEnum {
        Paywithgoogle = "paywithgoogle"
    }
}
