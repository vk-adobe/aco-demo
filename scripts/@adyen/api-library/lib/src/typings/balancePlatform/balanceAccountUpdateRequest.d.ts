import { PlatformPaymentConfiguration } from './platformPaymentConfiguration';
export declare class BalanceAccountUpdateRequest {
    /**
    * The unique identifier of the [account holder](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/accountHolders__resParam_id) associated with the balance account.
    */
    'accountHolderId'?: string;
    /**
    * A human-readable description of the balance account. You can use this parameter to distinguish between multiple balance accounts under an account holder.
    */
    'description'?: string;
    /**
    * A set of key and value pairs for general use. The keys do not have specific names and may be used for storing miscellaneous data as desired. > Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.
    */
    'metadata'?: {
        [key: string]: string;
    };
    'platformPaymentConfiguration'?: PlatformPaymentConfiguration | null;
    /**
    * Your reference to the balance account.
    */
    'reference'?: string;
    /**
    * The status of the balance account. Payment instruments linked to the balance account can only be used if the balance account status is **active**.  Possible values: **active**, **closed**, **suspended**.
    */
    'status'?: BalanceAccountUpdateRequest.StatusEnum;
    /**
    * The time zone of the balance account. For example, **Europe/Amsterdam**. Defaults to the time zone of the account holder if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
    */
    'timeZone'?: string;
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
export declare namespace BalanceAccountUpdateRequest {
    enum StatusEnum {
        Active = "active",
        Closed = "closed",
        Inactive = "inactive",
        Suspended = "suspended"
    }
}
