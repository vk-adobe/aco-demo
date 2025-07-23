export declare class RivertyDetails {
    /**
    * The address where to send the invoice.
    */
    'billingAddress'?: string;
    /**
    * The checkout attempt identifier.
    */
    'checkoutAttemptId'?: string;
    /**
    * The address where the goods should be delivered.
    */
    'deliveryAddress'?: string;
    /**
    * A string containing the shopper\'s device fingerprint. For more information, refer to [Device fingerprinting](https://docs.adyen.com/risk-management/device-fingerprinting).
    */
    'deviceFingerprint'?: string;
    /**
    * The iban number of the customer
    */
    'iban'?: string;
    /**
    * Shopper name, date of birth, phone number, and email address.
    */
    'personalDetails'?: string;
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
    * **riverty**
    */
    'type': RivertyDetails.TypeEnum;
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
export declare namespace RivertyDetails {
    enum TypeEnum {
        Riverty = "riverty",
        RivertyAccount = "riverty_account",
        SepadirectdebitRiverty = "sepadirectdebit_riverty"
    }
}
