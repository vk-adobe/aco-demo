export declare class AncvDetails {
    /**
    * ANCV account identification (email or account number)
    */
    'beneficiaryId'?: string;
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
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'storedPaymentMethodId'?: string;
    /**
    * **ancv**
    */
    'type'?: AncvDetails.TypeEnum;
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
export declare namespace AncvDetails {
    enum TypeEnum {
        Ancv = "ancv"
    }
}
