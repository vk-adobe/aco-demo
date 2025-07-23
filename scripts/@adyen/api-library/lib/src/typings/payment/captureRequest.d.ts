import { Amount } from './amount';
import { PlatformChargebackLogic } from './platformChargebackLogic';
import { Split } from './split';
import { ThreeDSecureData } from './threeDSecureData';
export declare class CaptureRequest {
    /**
    * This field contains additional data, which may be required for a particular modification request.  The additionalData object consists of entries, each of which includes the key and value.
    */
    'additionalData'?: {
        [key: string]: string;
    };
    /**
    * The merchant account that is used to process the payment.
    */
    'merchantAccount': string;
    'modificationAmount': Amount;
    'mpiData'?: ThreeDSecureData | null;
    /**
    * The original merchant reference to cancel.
    */
    'originalMerchantReference'?: string;
    /**
    * The original pspReference of the payment to modify. This reference is returned in: * authorisation response * authorisation notification
    */
    'originalReference': string;
    'platformChargebackLogic'?: PlatformChargebackLogic | null;
    /**
    * Your reference for the payment modification. This reference is visible in Customer Area and in reports. Maximum length: 80 characters.
    */
    'reference'?: string;
    /**
    * An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For more information, see how to split payments for [platforms](https://docs.adyen.com/platforms/automatic-split-configuration/).
    */
    'splits'?: Array<Split>;
    /**
    * The transaction reference provided by the PED. For point-of-sale integrations only.
    */
    'tenderReference'?: string;
    /**
    * Unique terminal ID for the PED that originally processed the request. For point-of-sale integrations only.
    */
    'uniqueTerminalId'?: string;
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
