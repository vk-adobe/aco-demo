import { RemediatingAction } from './remediatingAction';
import { VerificationErrorRecursive } from './verificationErrorRecursive';
export declare class VerificationError {
    /**
    * Contains the capabilities that the verification error applies to.
    */
    'capabilities'?: Array<VerificationError.CapabilitiesEnum>;
    /**
    * The verification error code.
    */
    'code'?: string;
    /**
    * A description of the error.
    */
    'message'?: string;
    /**
    * Contains the actions that you can take to resolve the verification error.
    */
    'remediatingActions'?: Array<RemediatingAction>;
    /**
    * Contains more granular information about the verification error.
    */
    'subErrors'?: Array<VerificationErrorRecursive>;
    /**
    * The type of error.   Possible values: **invalidInput**, **dataMissing**.
    */
    'type'?: VerificationError.TypeEnum;
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
export declare namespace VerificationError {
    enum CapabilitiesEnum {
        AcceptExternalFunding = "acceptExternalFunding",
        AcceptPspFunding = "acceptPspFunding",
        AcceptTransactionInRestrictedCountries = "acceptTransactionInRestrictedCountries",
        AcceptTransactionInRestrictedCountriesCommercial = "acceptTransactionInRestrictedCountriesCommercial",
        AcceptTransactionInRestrictedCountriesConsumer = "acceptTransactionInRestrictedCountriesConsumer",
        AcceptTransactionInRestrictedIndustries = "acceptTransactionInRestrictedIndustries",
        AcceptTransactionInRestrictedIndustriesCommercial = "acceptTransactionInRestrictedIndustriesCommercial",
        AcceptTransactionInRestrictedIndustriesConsumer = "acceptTransactionInRestrictedIndustriesConsumer",
        Acquiring = "acquiring",
        AtmWithdrawal = "atmWithdrawal",
        AtmWithdrawalCommercial = "atmWithdrawalCommercial",
        AtmWithdrawalConsumer = "atmWithdrawalConsumer",
        AtmWithdrawalInRestrictedCountries = "atmWithdrawalInRestrictedCountries",
        AtmWithdrawalInRestrictedCountriesCommercial = "atmWithdrawalInRestrictedCountriesCommercial",
        AtmWithdrawalInRestrictedCountriesConsumer = "atmWithdrawalInRestrictedCountriesConsumer",
        AuthorisedPaymentInstrumentUser = "authorisedPaymentInstrumentUser",
        GetGrantOffers = "getGrantOffers",
        IssueBankAccount = "issueBankAccount",
        IssueCard = "issueCard",
        IssueCardCommercial = "issueCardCommercial",
        IssueCardConsumer = "issueCardConsumer",
        IssueChargeCard = "issueChargeCard",
        IssueChargeCardCommercial = "issueChargeCardCommercial",
        IssueCreditLimit = "issueCreditLimit",
        LocalAcceptance = "localAcceptance",
        Payout = "payout",
        PayoutToTransferInstrument = "payoutToTransferInstrument",
        Processing = "processing",
        ReceiveFromBalanceAccount = "receiveFromBalanceAccount",
        ReceiveFromPlatformPayments = "receiveFromPlatformPayments",
        ReceiveFromThirdParty = "receiveFromThirdParty",
        ReceiveFromTransferInstrument = "receiveFromTransferInstrument",
        ReceiveGrants = "receiveGrants",
        ReceivePayments = "receivePayments",
        SendToBalanceAccount = "sendToBalanceAccount",
        SendToThirdParty = "sendToThirdParty",
        SendToTransferInstrument = "sendToTransferInstrument",
        ThirdPartyFunding = "thirdPartyFunding",
        UseCard = "useCard",
        UseCardCommercial = "useCardCommercial",
        UseCardConsumer = "useCardConsumer",
        UseCardInRestrictedCountries = "useCardInRestrictedCountries",
        UseCardInRestrictedCountriesCommercial = "useCardInRestrictedCountriesCommercial",
        UseCardInRestrictedCountriesConsumer = "useCardInRestrictedCountriesConsumer",
        UseCardInRestrictedIndustries = "useCardInRestrictedIndustries",
        UseCardInRestrictedIndustriesCommercial = "useCardInRestrictedIndustriesCommercial",
        UseCardInRestrictedIndustriesConsumer = "useCardInRestrictedIndustriesConsumer",
        UseChargeCard = "useChargeCard",
        UseChargeCardCommercial = "useChargeCardCommercial",
        WithdrawFromAtm = "withdrawFromAtm",
        WithdrawFromAtmCommercial = "withdrawFromAtmCommercial",
        WithdrawFromAtmConsumer = "withdrawFromAtmConsumer",
        WithdrawFromAtmInRestrictedCountries = "withdrawFromAtmInRestrictedCountries",
        WithdrawFromAtmInRestrictedCountriesCommercial = "withdrawFromAtmInRestrictedCountriesCommercial",
        WithdrawFromAtmInRestrictedCountriesConsumer = "withdrawFromAtmInRestrictedCountriesConsumer"
    }
    enum TypeEnum {
        DataMissing = "dataMissing",
        InvalidInput = "invalidInput",
        PendingStatus = "pendingStatus"
    }
}
