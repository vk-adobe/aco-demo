export declare class UpiIntentDetails {
    /**
    * TPAP (Third Party Application) Id that is being used to make the UPI payment
    */
    'appId'?: string;
    /**
    * The checkout attempt identifier.
    */
    'checkoutAttemptId'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    *
    * @deprecated since Adyen Checkout API v49
    * Use `storedPaymentMethodId` instead.
    */
    'recurringDetailReference'?: string;
    /**
    * The `shopperNotificationReference` returned in the response when you requested to notify the shopper. Used for recurring payment only.
    */
    'shopperNotificationReference'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'storedPaymentMethodId'?: string;
    /**
    * **upi_intent**
    */
    'type': UpiIntentDetails.TypeEnum;
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
export declare namespace UpiIntentDetails {
    enum TypeEnum {
        UpiIntent = "upi_intent"
    }
}
