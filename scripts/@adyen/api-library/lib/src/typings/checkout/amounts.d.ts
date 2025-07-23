export declare class Amounts {
    /**
    * The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes/).
    */
    'currency': string;
    /**
    * The amounts of the donation (in [minor units](https://docs.adyen.com/development-resources/currency-codes/)).
    */
    'values': Array<number>;
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
