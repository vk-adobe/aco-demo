import { Amount } from './amount';
import { ResourceReference } from './resourceReference';
export declare class NegativeBalanceCompensationWarningNotificationData {
    'accountHolder'?: ResourceReference | null;
    'amount'?: Amount | null;
    /**
    * The unique identifier of the balance platform.
    */
    'balancePlatform'?: string;
    /**
    * The date and time when the event was triggered, in ISO 8601 extended format. For example, **2020-12-18T10:15:30+01:00**.
    */
    'creationDate'?: Date;
    /**
    * The ID of the resource.
    */
    'id'?: string;
    /**
    * The balance account ID of the account that will be used to compensate the balance account whose balance is negative.
    */
    'liableBalanceAccountId'?: string;
    /**
    * The date the balance for the account became negative.
    */
    'negativeBalanceSince'?: Date;
    /**
    * The date when a compensation transfer to the account is scheduled to happen.
    */
    'scheduledCompensationAt'?: Date;
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
