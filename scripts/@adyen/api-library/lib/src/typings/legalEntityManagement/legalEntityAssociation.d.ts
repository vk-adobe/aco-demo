export declare class LegalEntityAssociation {
    /**
    * The unique identifier of another legal entity with which the `legalEntityId` is associated. When the `legalEntityId` is associated to legal entities other than the current one, the response returns all the associations.
    */
    'associatorId'?: string;
    /**
    * The legal entity type of associated legal entity.  For example, **organization**, **soleProprietorship** or **individual**.
    */
    'entityType'?: string;
    /**
    * The individual\'s job title if the `type` is **uboThroughControl** or **signatory**.
    */
    'jobTitle'?: string;
    /**
    * The unique identifier of the associated [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id).
    */
    'legalEntityId': string;
    /**
    * The name of the associated [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id).  - For **individual**, `name.firstName` and `name.lastName`. - For **organization**, `legalName`. - For **soleProprietorship**, `name`.
    */
    'name'?: string;
    /**
    * Default value: **false** Set to **true** if the entity association `type` **director**, **secondaryPartner** or **shareholder** is also a nominee. Only applicable to New Zealand.
    */
    'nominee'?: boolean;
    /**
    * The individual\'s relationship to a legal representative if the `type` is **legalRepresentative**. Possible values: **parent**, **guardian**.
    */
    'relationship'?: string;
    /**
    * Defines the KYC exemption reason for a settlor associated with a trust. Only applicable to trusts in Australia.  For example, **professionalServiceProvider**, **deceased**, or **contributionBelowThreshold**.
    */
    'settlorExemptionReason'?: Array<string>;
    /**
    * Defines the relationship of the legal entity to the current legal entity.  Possible value for individuals: **legalRepresentative**.  Possible values for organizations: **director**, **signatory**, **trustOwnership**, **uboThroughOwnership**, **uboThroughControl**, or **ultimateParentCompany**.  Possible values for sole proprietorships: **soleProprietorship**.  Possible value for trusts: **trust**.  Possible values for trust members: **definedBeneficiary**, **protector**, **secondaryTrustee**, **settlor**, **uboThroughControl**, or **uboThroughOwnership**.  Possible value for unincorporated partnership: **unincorporatedPartnership**.  Possible values for unincorporated partnership members: **secondaryPartner**, **uboThroughControl**, **uboThroughOwnership**
    */
    'type': LegalEntityAssociation.TypeEnum;
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
export declare namespace LegalEntityAssociation {
    enum TypeEnum {
        DefinedBeneficiary = "definedBeneficiary",
        Director = "director",
        ImmediateParentCompany = "immediateParentCompany",
        LegalRepresentative = "legalRepresentative",
        PciSignatory = "pciSignatory",
        Protector = "protector",
        SecondaryPartner = "secondaryPartner",
        SecondaryTrustee = "secondaryTrustee",
        Settlor = "settlor",
        Signatory = "signatory",
        SoleProprietorship = "soleProprietorship",
        Trust = "trust",
        TrustOwnership = "trustOwnership",
        UboThroughControl = "uboThroughControl",
        UboThroughOwnership = "uboThroughOwnership",
        UltimateParentCompany = "ultimateParentCompany",
        UndefinedBeneficiary = "undefinedBeneficiary",
        UnincorporatedPartnership = "unincorporatedPartnership"
    }
}
