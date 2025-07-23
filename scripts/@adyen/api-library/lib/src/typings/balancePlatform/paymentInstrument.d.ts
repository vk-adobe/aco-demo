import { BankAccountDetails } from './bankAccountDetails';
import { Card } from './card';
import { IbanAccountIdentification } from './ibanAccountIdentification';
export declare class PaymentInstrument {
    /**
    * Contains optional, additional business account details. Returned when you create a payment instrument with `type` **bankAccount**.
    *
    * @deprecated since Configuration API v2
    * Please use `bankAccount` object instead
    */
    'additionalBankAccountIdentifications'?: Array<IbanAccountIdentification>;
    /**
    * The unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/balanceAccounts__resParam_id) associated with the payment instrument.
    */
    'balanceAccountId': string;
    'bankAccount'?: BankAccountDetails | null;
    'card'?: Card | null;
    /**
    * Your description for the payment instrument, maximum 300 characters.
    */
    'description'?: string;
    /**
    * The unique identifier of the payment instrument.
    */
    'id': string;
    /**
    * The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the payment instrument is issued. For example, **NL** or **US**.
    */
    'issuingCountryCode': string;
    /**
    * The unique identifier of the [payment instrument group](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/paymentInstrumentGroups__resParam_id) to which the payment instrument belongs.
    */
    'paymentInstrumentGroupId'?: string;
    /**
    * Your reference for the payment instrument, maximum 150 characters.
    */
    'reference'?: string;
    /**
    * The unique identifier of the payment instrument that replaced this payment instrument.
    */
    'replacedById'?: string;
    /**
    * The unique identifier of the payment instrument that is replaced by this payment instrument.
    */
    'replacementOfId'?: string;
    /**
    * The status of the payment instrument. If a status is not specified when creating a payment instrument, it is set to **active** by default. However, there can be exceptions for cards based on the `card.formFactor` and the `issuingCountryCode`. For example, when issuing physical cards in the US, the default status is **inactive**.  Possible values:    * **active**:  The payment instrument is active and can be used to make payments.    * **inactive**: The payment instrument is inactive and cannot be used to make payments.    * **suspended**: The payment instrument is suspended, either because it was stolen or lost.    * **closed**: The payment instrument is permanently closed. This action cannot be undone.
    */
    'status'?: PaymentInstrument.StatusEnum;
    /**
    * The status comment provides additional information for the statusReason of the payment instrument.
    */
    'statusComment'?: string;
    /**
    * The reason for the status of the payment instrument.  Possible values: **accountClosure**, **damaged**, **endOfLife**, **expired**, **lost**, **stolen**, **suspectedFraud**, **transactionRule**, **other**. If the reason is **other**, you must also send the `statusComment` parameter describing the status change.
    */
    'statusReason'?: PaymentInstrument.StatusReasonEnum;
    /**
    * The type of payment instrument.  Possible values: **card**, **bankAccount**.
    */
    'type': PaymentInstrument.TypeEnum;
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
export declare namespace PaymentInstrument {
    enum StatusEnum {
        Active = "active",
        Closed = "closed",
        Inactive = "inactive",
        Suspended = "suspended"
    }
    enum StatusReasonEnum {
        AccountClosure = "accountClosure",
        Damaged = "damaged",
        EndOfLife = "endOfLife",
        Expired = "expired",
        Lost = "lost",
        Other = "other",
        Stolen = "stolen",
        SuspectedFraud = "suspectedFraud",
        TransactionRule = "transactionRule"
    }
    enum TypeEnum {
        BankAccount = "bankAccount",
        Card = "card"
    }
}
