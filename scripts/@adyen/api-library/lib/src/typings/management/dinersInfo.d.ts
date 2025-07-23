import { TransactionDescriptionInfo } from './transactionDescriptionInfo';
export declare class DinersInfo {
    /**
    * MID (Merchant ID) number. Required for merchants operating in Japan. Format: 14 numeric characters.
    */
    'midNumber'?: string;
    /**
    * Indicates whether the JCB Merchant ID is reused from a previously configured JCB payment method. The default value is **false**. For merchants operating in Japan, this field is required and must be set to **true**.
    */
    'reuseMidNumber': boolean;
    /**
    * Specifies the service level (settlement type) of this payment method. Required for merchants operating in Japan. Possible values:  * **noContract**: Adyen holds the contract with JCB.  * **gatewayContract**: JCB receives the settlement and handles disputes, then pays out to you or your sub-merchant directly.
    */
    'serviceLevel'?: DinersInfo.ServiceLevelEnum;
    'transactionDescription'?: TransactionDescriptionInfo | null;
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
export declare namespace DinersInfo {
    enum ServiceLevelEnum {
        NoContract = "noContract",
        GatewayContract = "gatewayContract"
    }
}
