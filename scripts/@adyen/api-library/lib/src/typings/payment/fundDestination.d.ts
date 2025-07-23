import { Address } from './address';
import { Card } from './card';
import { Name } from './name';
import { SubMerchant } from './subMerchant';
export declare class FundDestination {
    /**
    * Bank Account Number of the recipient
    */
    'IBAN'?: string;
    /**
    * a map of name/value pairs for passing in additional/industry-specific data
    */
    'additionalData'?: {
        [key: string]: string;
    };
    'billingAddress'?: Address | null;
    'card'?: Card | null;
    /**
    * The `recurringDetailReference` you want to use for this payment. The value `LATEST` can be used to select the most recently stored recurring detail.
    */
    'selectedRecurringDetailReference'?: string;
    /**
    * the email address of the person
    */
    'shopperEmail'?: string;
    'shopperName'?: Name | null;
    /**
    * Required for recurring payments.  Your reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters. > Your reference must not include personally identifiable information (PII) such as name or email address.
    */
    'shopperReference'?: string;
    'subMerchant'?: SubMerchant | null;
    /**
    * the telephone number of the person
    */
    'telephoneNumber'?: string;
    /**
    * The purpose of a digital wallet transaction.
    */
    'walletPurpose'?: string;
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
