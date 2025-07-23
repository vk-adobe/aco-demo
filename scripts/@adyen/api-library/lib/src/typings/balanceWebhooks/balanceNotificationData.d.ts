import { Balances } from './balances';
export declare class BalanceNotificationData {
    /**
    * The unique identifier of the balance account.
    */
    'balanceAccountId': string;
    /**
    * The unique identifier of the balance platform.
    */
    'balancePlatform'?: string;
    'balances': Balances;
    /**
    * The date and time when the event was triggered, in ISO 8601 extended format. For example, **2020-12-18T10:15:30+01:00**.
    */
    'creationDate'?: Date;
    /**
    * TThe three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).
    */
    'currency': string;
    /**
    * The ID of the resource.
    */
    'id'?: string;
    /**
    * The unique identifier of the balance webhook setting.
    */
    'settingIds': Array<string>;
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
