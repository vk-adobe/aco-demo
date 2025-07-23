export declare class PaymentMethodToStore {
    /**
    * Secondary brand of the card. For example: **plastix**, **hmclub**.
    */
    'brand'?: string;
    /**
    * The card verification code. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).
    */
    'cvc'?: string;
    /**
    * The encrypted card.
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
    * The name of the card holder.
    */
    'holderName'?: string;
    /**
    * The card number. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).
    */
    'number'?: string;
    /**
    * Set to **scheme**.
    */
    'type'?: string;
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
