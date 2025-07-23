export declare class CardIdentification {
    /**
    * The expiry month of the card.  Format: two digits. Add a leading zero for single-digit months. For example: * 03 = March * 11 = November
    */
    'expiryMonth'?: string;
    /**
    * The expiry year of the card.  Format: four digits. For example: 2020
    */
    'expiryYear'?: string;
    /**
    * The issue number of the card. Applies only to some UK debit cards.
    */
    'issueNumber'?: string;
    /**
    * The card number without any separators.  For security, the response only includes the last four digits of the card number.
    */
    'number'?: string;
    /**
    * The month when the card was issued. Applies only to some UK debit cards.  Format: two digits. Add a leading zero for single-digit months. For example: * 03 = March * 11 = November
    */
    'startMonth'?: string;
    /**
    * The year when the card was issued. Applies only to some UK debit cards.  Format: four digits. For example: 2020
    */
    'startYear'?: string;
    /**
    * The unique [token](/payouts/payout-service/pay-out-to-cards/manage-card-information#save-card-details) created to identify the counterparty.
    */
    'storedPaymentMethodId'?: string;
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
