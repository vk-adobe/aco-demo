import { Address } from './address';
import { CardDetails } from './cardDetails';
import { Name } from './name';
import { SubMerchant } from './subMerchant';
export declare class FundRecipient {
    /**
    * The IBAN of the bank account where the funds are being transferred to.
    */
    'IBAN'?: string;
    'billingAddress'?: Address | null;
    'paymentMethod'?: CardDetails | null;
    /**
    * The email address of the shopper.
    */
    'shopperEmail'?: string;
    'shopperName'?: Name | null;
    /**
    * Required for recurring payments.  Your reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters. > Your reference must not include personally identifiable information (PII) such as name or email address.
    */
    'shopperReference'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'storedPaymentMethodId'?: string;
    'subMerchant'?: SubMerchant | null;
    /**
    * The telephone number of the shopper.
    */
    'telephoneNumber'?: string;
    /**
    * The unique identifier for the wallet the funds are being transferred to. You can use the shopper reference or any other identifier.
    */
    'walletIdentifier'?: string;
    /**
    * The tax identifier of the person receiving the funds.
    */
    'walletOwnerTaxId'?: string;
    /**
    * The purpose of a digital wallet transaction.
    */
    'walletPurpose'?: FundRecipient.WalletPurposeEnum;
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
export declare namespace FundRecipient {
    enum WalletPurposeEnum {
        IdentifiedBoleto = "identifiedBoleto",
        TransferDifferentWallet = "transferDifferentWallet",
        TransferOwnWallet = "transferOwnWallet",
        TransferSameWallet = "transferSameWallet",
        UnidentifiedBoleto = "unidentifiedBoleto"
    }
}
