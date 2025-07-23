export declare class GetTermsOfServiceDocumentResponse {
    /**
    * The Terms of Service document in Base64-encoded format.
    */
    'document'?: string;
    /**
    * The unique identifier of the legal entity.
    */
    'id'?: string;
    /**
    * The language used for the Terms of Service document, specified by the two-letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code. Possible value: **en** for English.
    */
    'language'?: string;
    /**
    * The format of the Terms of Service document.
    */
    'termsOfServiceDocumentFormat'?: string;
    /**
    * The unique identifier of the Terms of Service document.
    */
    'termsOfServiceDocumentId'?: string;
    /**
    * The type of Terms of Service.  Possible values: *  **adyenForPlatformsManage** *  **adyenIssuing** *  **adyenForPlatformsAdvanced** *  **adyenCapital** *  **adyenAccount** *  **adyenCard** *  **adyenFranchisee** *  **adyenPccr** *  **adyenChargeCard**
    */
    'type'?: GetTermsOfServiceDocumentResponse.TypeEnum;
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
export declare namespace GetTermsOfServiceDocumentResponse {
    enum TypeEnum {
        AdyenAccount = "adyenAccount",
        AdyenCapital = "adyenCapital",
        AdyenCard = "adyenCard",
        AdyenChargeCard = "adyenChargeCard",
        AdyenForPlatformsAdvanced = "adyenForPlatformsAdvanced",
        AdyenForPlatformsManage = "adyenForPlatformsManage",
        AdyenFranchisee = "adyenFranchisee",
        AdyenIssuing = "adyenIssuing",
        AdyenPccr = "adyenPccr"
    }
}
