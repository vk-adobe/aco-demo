export declare class BankCategoryData {
    /**
    * The priority for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. Required for transfers with `category` **bank**.  Possible values:  * **regular**: for normal, low-value transactions.  * **fast**: a faster way to transfer funds, but the fees are higher. Recommended for high-priority, low-value transactions.  * **wire**: the fastest way to transfer funds, but this has the highest fees. Recommended for high-priority, high-value transactions.  * **instant**: for instant funds transfers in [SEPA countries](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).  * **crossBorder**: for high-value transfers to a recipient in a different country.  * **internal**: for transfers to an Adyen-issued business bank account (by bank account number/IBAN).
    */
    'priority'?: BankCategoryData.PriorityEnum;
    /**
    * **bank**
    */
    'type'?: BankCategoryData.TypeEnum;
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
export declare namespace BankCategoryData {
    enum PriorityEnum {
        CrossBorder = "crossBorder",
        Fast = "fast",
        Instant = "instant",
        Internal = "internal",
        Regular = "regular",
        Wire = "wire"
    }
    enum TypeEnum {
        Bank = "bank"
    }
}
