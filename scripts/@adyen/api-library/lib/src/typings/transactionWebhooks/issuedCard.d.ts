import { RelayedAuthorisationData } from './relayedAuthorisationData';
import { TransferNotificationValidationFact } from './transferNotificationValidationFact';
export declare class IssuedCard {
    /**
    * The authorisation type. For example, **defaultAuthorisation**, **preAuthorisation**, **finalAuthorisation**
    */
    'authorisationType'?: string;
    /**
    * Indicates the method used for entering the PAN to initiate a transaction.  Possible values: **manual**, **chip**, **magstripe**, **contactless**, **cof**, **ecommerce**, **token**.
    */
    'panEntryMode'?: IssuedCard.PanEntryModeEnum;
    /**
    * Contains information about how the payment was processed. For example, **ecommerce** for online or **pos** for in-person payments.
    */
    'processingType'?: IssuedCard.ProcessingTypeEnum;
    'relayedAuthorisationData'?: RelayedAuthorisationData | null;
    /**
    * The identifier of the original payment. This ID is provided by the scheme and can be alphanumeric or numeric, depending on the scheme. The `schemeTraceID` should refer to an original `schemeUniqueTransactionID` provided in an earlier payment (not necessarily processed by Adyen). A `schemeTraceId` is typically available for authorization adjustments or recurring payments.
    */
    'schemeTraceId'?: string;
    /**
    * The unique identifier created by the scheme. This ID can be alphanumeric or numeric depending on the scheme.
    */
    'schemeUniqueTransactionId'?: string;
    /**
    * **issuedCard**
    */
    'type'?: IssuedCard.TypeEnum;
    /**
    * The evaluation of the validation facts. See [validation checks](https://docs.adyen.com/issuing/validation-checks) for more information.
    */
    'validationFacts'?: Array<TransferNotificationValidationFact>;
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
export declare namespace IssuedCard {
    enum PanEntryModeEnum {
        Chip = "chip",
        Cof = "cof",
        Contactless = "contactless",
        Ecommerce = "ecommerce",
        Magstripe = "magstripe",
        Manual = "manual",
        Token = "token"
    }
    enum ProcessingTypeEnum {
        AtmWithdraw = "atmWithdraw",
        BalanceInquiry = "balanceInquiry",
        Ecommerce = "ecommerce",
        Moto = "moto",
        Pos = "pos",
        PurchaseWithCashback = "purchaseWithCashback",
        Recurring = "recurring",
        Token = "token"
    }
    enum TypeEnum {
        IssuedCard = "issuedCard"
    }
}
