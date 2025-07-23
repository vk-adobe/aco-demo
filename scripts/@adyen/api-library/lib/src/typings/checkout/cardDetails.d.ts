export declare class CardDetails {
    /**
    * Secondary brand of the card. For example: **plastix**, **hmclub**.
    */
    'brand'?: string;
    /**
    * The checkout attempt identifier.
    */
    'checkoutAttemptId'?: string;
    /**
    * @deprecated
    */
    'cupsecureplus_smscode'?: string;
    /**
    * The card verification code. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).
    */
    'cvc'?: string;
    /**
    * Only include this for JSON Web Encryption (JWE) implementations. The JWE-encrypted card details.
    */
    'encryptedCard'?: string;
    /**
    * The encrypted card number.
    */
    'encryptedCardNumber'?: string;
    /**
    * The encrypted card expiry month.
    */
    'encryptedExpiryMonth'?: string;
    /**
    * The encrypted card expiry year.
    */
    'encryptedExpiryYear'?: string;
    /**
    * The encrypted card verification code.
    */
    'encryptedSecurityCode'?: string;
    /**
    * The card expiry month. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).
    */
    'expiryMonth'?: string;
    /**
    * The card expiry year. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).
    */
    'expiryYear'?: string;
    /**
    * The encoded fastlane data blob
    */
    'fastlaneData'?: string;
    /**
    * The funding source that should be used when multiple sources are available. For Brazilian combo cards, by default the funding source is credit. To use debit, set this value to **debit**.
    */
    'fundingSource'?: CardDetails.FundingSourceEnum;
    /**
    * The name of the card holder.
    */
    'holderName'?: string;
    /**
    * The transaction identifier from card schemes. This is the [`networkTxReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_additionalData-ResponseAdditionalDataCommon-networkTxReference) from the response to the first payment.
    */
    'networkPaymentReference'?: string;
    /**
    * The card number. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).
    */
    'number'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    *
    * @deprecated since Adyen Checkout API v49
    * Use `storedPaymentMethodId` instead.
    */
    'recurringDetailReference'?: string;
    /**
    * The `shopperNotificationReference` returned in the response when you requested to notify the shopper. Used only for recurring payments in India.
    */
    'shopperNotificationReference'?: string;
    /**
    * An identifier used for the Click to Pay transaction.
    */
    'srcCorrelationId'?: string;
    /**
    * The SRC reference for the Click to Pay token.
    */
    'srcDigitalCardId'?: string;
    /**
    * The scheme that is being used for Click to Pay.
    */
    'srcScheme'?: string;
    /**
    * The reference for the Click to Pay token.
    */
    'srcTokenReference'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'storedPaymentMethodId'?: string;
    /**
    * Required for mobile integrations. Version of the 3D Secure 2 mobile SDK.
    */
    'threeDS2SdkVersion'?: string;
    /**
    * Default payment method details. Common for scheme payment methods, and for simple payment method details.
    */
    'type'?: CardDetails.TypeEnum;
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
export declare namespace CardDetails {
    enum FundingSourceEnum {
        Credit = "credit",
        Debit = "debit"
    }
    enum TypeEnum {
        Bcmc = "bcmc",
        Scheme = "scheme",
        NetworkToken = "networkToken",
        Giftcard = "giftcard",
        Card = "card",
        Clicktopay = "clicktopay"
    }
}
