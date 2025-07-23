import { Individual } from './individual';
import { LegalEntityAssociation } from './legalEntityAssociation';
import { LegalEntityCapability } from './legalEntityCapability';
import { Organization } from './organization';
import { SoleProprietorship } from './soleProprietorship';
import { Trust } from './trust';
import { UnincorporatedPartnership } from './unincorporatedPartnership';
export declare class LegalEntityInfo {
    /**
    * Contains key-value pairs that specify the actions that the legal entity can do in your platform.The key is a capability required for your integration. For example, **issueCard** for Issuing.The value is an object containing the settings for the capability.
    */
    'capabilities'?: {
        [key: string]: LegalEntityCapability;
    };
    /**
    * List of legal entities associated with the current legal entity. For example, ultimate beneficial owners associated with an organization through ownership or control, or as signatories.
    */
    'entityAssociations'?: Array<LegalEntityAssociation>;
    'individual'?: Individual | null;
    'organization'?: Organization | null;
    /**
    * Your reference for the legal entity, maximum 150 characters.
    */
    'reference'?: string;
    'soleProprietorship'?: SoleProprietorship | null;
    'trust'?: Trust | null;
    /**
    * The type of legal entity.  Possible values: **individual**, **organization**, **soleProprietorship**, or **trust**.
    */
    'type'?: LegalEntityInfo.TypeEnum;
    'unincorporatedPartnership'?: UnincorporatedPartnership | null;
    /**
    * A key-value pair that specifies the verification process for a legal entity. Set to **upfront** for upfront verification for [marketplaces](https://docs.adyen.com/marketplaces/verification-overview/verification-types/#upfront-verification).
    */
    'verificationPlan'?: string;
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
export declare namespace LegalEntityInfo {
    enum TypeEnum {
        Individual = "individual",
        Organization = "organization",
        SoleProprietorship = "soleProprietorship",
        Trust = "trust",
        UnincorporatedPartnership = "unincorporatedPartnership"
    }
}
