import { Amount } from './amount';
import { BillingAddress } from './billingAddress';
export declare class SubMerchantInfo {
    'address'?: BillingAddress | null;
    'amount'?: Amount | null;
    /**
    * Required for transactions performed by registered payment facilitators. The email associated with the sub-merchant\'s account.
    */
    'email'?: string;
    /**
    * Required for transactions performed by registered payment facilitators. A unique identifier that you create for the sub-merchant, used by schemes to identify the sub-merchant.  * Format: Alphanumeric * Maximum length: 15 characters
    */
    'id'?: string;
    /**
    * Required for transactions performed by registered payment facilitators. The sub-merchant\'s 4-digit Merchant Category Code (MCC).  * Format: Numeric * Fixed length: 4 digits
    */
    'mcc'?: string;
    /**
    * Required for transactions performed by registered payment facilitators. The name of the sub-merchant. Based on scheme specifications, this value will overwrite the shopper statement that will appear in the card statement. * Format: Alphanumeric * Maximum length: 22 characters
    */
    'name'?: string;
    /**
    * Required for transactions performed by registered payment facilitators. The phone number associated with the sub-merchant\'s account.
    */
    'phoneNumber'?: string;
    'registeredSince'?: string;
    /**
    * Required for transactions performed by registered payment facilitators. The tax ID of the sub-merchant. * Format: Numeric * Fixed length: 11 digits for the CPF or 14 digits for the CNPJ
    */
    'taxId'?: string;
    /**
    * Required for transactions performed by registered payment facilitators. The sub-merchant\'s URL on the platform, i.e. the sub-merchant\'s shop.
    */
    'url'?: string;
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
