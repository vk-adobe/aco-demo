import { SourceOfFunds } from './sourceOfFunds';
import { WebData } from './webData';
import { WebDataExemption } from './webDataExemption';
export declare class BusinessLineInfo {
    /**
    * The capability for which you are creating the business line.  Possible values: **receivePayments**, **receiveFromPlatformPayments**, **issueBankAccount**
    *
    * @deprecated since Legal Entity Management API v3
    * Use `service` instead.
    */
    'capability'?: BusinessLineInfo.CapabilityEnum;
    /**
    * A code that represents the industry of the legal entity for [marketplaces](https://docs.adyen.com/marketplaces/verification-requirements/reference-additional-products/#list-industry-codes) or [platforms](https://docs.adyen.com/platforms/verification-requirements/reference-additional-products/#list-industry-codes). For example, **4431A** for computer software stores.
    */
    'industryCode': string;
    /**
    * Unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities__resParam_id) that owns the business line.
    */
    'legalEntityId': string;
    /**
    * A list of channels where goods or services are sold.  Possible values: **pos**, **posMoto**, **eCommerce**, **ecomMoto**, **payByLink**.  Required only in combination with the `service` **paymentProcessing**.
    */
    'salesChannels'?: Array<string>;
    /**
    * The service for which you are creating the business line.    Possible values: *  **paymentProcessing** *  **banking**
    */
    'service': BusinessLineInfo.ServiceEnum;
    'sourceOfFunds'?: SourceOfFunds | null;
    /**
    * List of website URLs where your user\'s goods or services are sold. When this is required for a service but your user does not have an online presence, provide the reason in the `webDataExemption` object.
    */
    'webData'?: Array<WebData>;
    'webDataExemption'?: WebDataExemption | null;
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
export declare namespace BusinessLineInfo {
    enum CapabilityEnum {
        ReceivePayments = "receivePayments",
        ReceiveFromPlatformPayments = "receiveFromPlatformPayments",
        IssueBankAccount = "issueBankAccount"
    }
    enum ServiceEnum {
        PaymentProcessing = "paymentProcessing",
        Banking = "banking"
    }
}
