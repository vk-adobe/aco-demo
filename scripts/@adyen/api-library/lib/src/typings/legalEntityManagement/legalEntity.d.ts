import { CapabilityProblem } from './capabilityProblem';
import { DocumentReference } from './documentReference';
import { EntityReference } from './entityReference';
import { Individual } from './individual';
import { LegalEntityAssociation } from './legalEntityAssociation';
import { LegalEntityCapability } from './legalEntityCapability';
import { Organization } from './organization';
import { SoleProprietorship } from './soleProprietorship';
import { TransferInstrumentReference } from './transferInstrumentReference';
import { Trust } from './trust';
import { UnincorporatedPartnership } from './unincorporatedPartnership';
import { VerificationDeadline } from './verificationDeadline';
export declare class LegalEntity {
    /**
    * Contains key-value pairs that specify the actions that the legal entity can do in your platform.The key is a capability required for your integration. For example, **issueCard** for Issuing.The value is an object containing the settings for the capability.
    */
    'capabilities'?: {
        [key: string]: LegalEntityCapability;
    };
    /**
    * List of documents uploaded for the legal entity.
    */
    'documentDetails'?: Array<DocumentReference>;
    /**
    * List of documents uploaded for the legal entity.
    *
    * @deprecated since Legal Entity Management API v1
    * Use the `documentDetails` array instead.
    */
    'documents'?: Array<EntityReference>;
    /**
    * List of legal entities associated with the current legal entity. For example, ultimate beneficial owners associated with an organization through ownership or control, or as signatories.
    */
    'entityAssociations'?: Array<LegalEntityAssociation>;
    /**
    * The unique identifier of the legal entity.
    */
    'id': string;
    'individual'?: Individual | null;
    'organization'?: Organization | null;
    /**
    * List of verification errors related to capabilities for the legal entity.
    */
    'problems'?: Array<CapabilityProblem>;
    /**
    * Your reference for the legal entity, maximum 150 characters.
    */
    'reference'?: string;
    'soleProprietorship'?: SoleProprietorship | null;
    /**
    * List of transfer instruments that the legal entity owns.
    */
    'transferInstruments'?: Array<TransferInstrumentReference>;
    'trust'?: Trust | null;
    /**
    * The type of legal entity.  Possible values: **individual**, **organization**, **soleProprietorship**, or **trust**.
    */
    'type'?: LegalEntity.TypeEnum;
    'unincorporatedPartnership'?: UnincorporatedPartnership | null;
    /**
    * List of verification deadlines and the capabilities that will be disallowed if verification errors are not resolved.
    */
    'verificationDeadlines'?: Array<VerificationDeadline>;
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
export declare namespace LegalEntity {
    enum TypeEnum {
        Individual = "individual",
        Organization = "organization",
        SoleProprietorship = "soleProprietorship",
        Trust = "trust",
        UnincorporatedPartnership = "unincorporatedPartnership"
    }
}
