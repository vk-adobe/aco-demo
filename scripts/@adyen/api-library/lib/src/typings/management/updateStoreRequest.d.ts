import { StoreSplitConfiguration } from './storeSplitConfiguration';
import { UpdatableAddress } from './updatableAddress';
export declare class UpdateStoreRequest {
    'address'?: UpdatableAddress | null;
    /**
    * The unique identifiers of the [business lines](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/businessLines__resParam_id) that the store is associated with.
    */
    'businessLineIds'?: Array<string>;
    /**
    * The description of the store.
    */
    'description'?: string;
    /**
    * The unique identifier of the store, used by certain payment methods and tax authorities.  Required for CNPJ in Brazil, in the format 00.000.000/0000-00 separated by dots, slashes, hyphens, or without separators.  Optional for SIRET in France, up to 14 digits.  Optional for Zip in Australia, up to 50 digits.
    */
    'externalReferenceId'?: string;
    /**
    * The phone number of the store, including \'+\' and country code in the [E.164](https://en.wikipedia.org/wiki/E.164) format. If passed in a different format, we convert and validate the phone number against E.164.
    */
    'phoneNumber'?: string;
    'splitConfiguration'?: StoreSplitConfiguration | null;
    /**
    * The status of the store. Possible values are:  - **active**: This value is assigned automatically when a store is created.  - **inactive**: The maximum [transaction limits and number of Store-and-Forward transactions](https://docs.adyen.com/point-of-sale/determine-account-structure/configure-features#payment-features) for the store are set to 0. This blocks new transactions, but captures are still possible. - **closed**: The terminals of the store are reassigned to the merchant inventory, so they can\'t process payments.  You can change the status from **active** to **inactive**, and from **inactive** to **active** or **closed**.  Once **closed**, a store can\'t be reopened.
    */
    'status'?: UpdateStoreRequest.StatusEnum;
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
export declare namespace UpdateStoreRequest {
    enum StatusEnum {
        Active = "active",
        Closed = "closed",
        Inactive = "inactive"
    }
}
