export declare class RiskScores {
    /**
    * Transaction risk score provided by Mastercard. Values provided by Mastercard range between 0 (lowest risk) to 998 (highest risk).
    */
    'mastercard'?: number;
    /**
    * Transaction risk score provided by Visa. Values provided by Visa range between 01 (lowest risk) to 99 (highest risk).
    */
    'visa'?: number;
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
