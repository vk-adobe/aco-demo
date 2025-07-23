import { Address } from './address';
import { TaxInformation } from './taxInformation';
import { UndefinedBeneficiary } from './undefinedBeneficiary';
export declare class Trust {
    /**
    * The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the governing country.
    */
    'countryOfGoverningLaw': string;
    /**
    * The date when the legal arrangement was incorporated in YYYY-MM-DD format.
    */
    'dateOfIncorporation'?: string;
    /**
    * A short description about the trust. Only applicable for charitable trusts in New Zealand.
    */
    'description'?: string;
    /**
    * The registered name, if different from the `name`.
    */
    'doingBusinessAs'?: string;
    /**
    * The legal name.
    */
    'name': string;
    'principalPlaceOfBusiness'?: Address | null;
    'registeredAddress': Address;
    /**
    * The registration number.
    */
    'registrationNumber'?: string;
    /**
    * The tax information of the entity.
    */
    'taxInformation'?: Array<TaxInformation>;
    /**
    * Type of trust.  See possible values for trusts in [Australia](https://docs.adyen.com/platforms/verification-requirements/?tab=trust_3_4#trust-types-in-australia) and [New Zealand](https://docs.adyen.com/platforms/verification-requirements/?tab=trust_3_4#trust-types-in-new-zealand).
    */
    'type': Trust.TypeEnum;
    /**
    * The undefined beneficiary information of the entity.
    */
    'undefinedBeneficiaryInfo'?: Array<UndefinedBeneficiary>;
    /**
    * The reason for not providing a VAT number.  Possible values: **industryExemption**, **belowTaxThreshold**.
    */
    'vatAbsenceReason'?: Trust.VatAbsenceReasonEnum;
    /**
    * The VAT number.
    */
    'vatNumber'?: string;
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
export declare namespace Trust {
    enum TypeEnum {
        BusinessTrust = "businessTrust",
        CashManagementTrust = "cashManagementTrust",
        CharitableTrust = "charitableTrust",
        CorporateUnitTrust = "corporateUnitTrust",
        DeceasedEstate = "deceasedEstate",
        DiscretionaryTrust = "discretionaryTrust",
        DiscretionaryInvestmentTrust = "discretionaryInvestmentTrust",
        DiscretionaryServicesManagementTrust = "discretionaryServicesManagementTrust",
        DiscretionaryTradingTrust = "discretionaryTradingTrust",
        FamilyTrust = "familyTrust",
        FirstHomeSaverAccountsTrust = "firstHomeSaverAccountsTrust",
        FixedTrust = "fixedTrust",
        FixedUnitTrust = "fixedUnitTrust",
        HybridTrust = "hybridTrust",
        ListedPublicUnitTrust = "listedPublicUnitTrust",
        OtherTrust = "otherTrust",
        PooledSuperannuationTrust = "pooledSuperannuationTrust",
        PublicTradingTrust = "publicTradingTrust",
        UnlistedPublicUnitTrust = "unlistedPublicUnitTrust"
    }
    enum VatAbsenceReasonEnum {
        IndustryExemption = "industryExemption",
        BelowTaxThreshold = "belowTaxThreshold"
    }
}
