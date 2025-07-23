export declare class AcceptTermsOfServiceResponse {
    /**
    * The unique identifier of the user that accepted the Terms of Service.
    */
    'acceptedBy'?: string;
    /**
    * The unique identifier of the Terms of Service acceptance.
    */
    'id'?: string;
    /**
    * The IP address of the user that accepted the Terms of Service.
    */
    'ipAddress'?: string;
    /**
    * The language used for the Terms of Service document, specified by the two-letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code. Possible value: **en** for English.
    */
    'language'?: string;
    /**
    * The unique identifier of the Terms of Service document.
    */
    'termsOfServiceDocumentId'?: string;
    /**
    * The type of Terms of Service.  Possible values: *  **adyenForPlatformsManage** *  **adyenIssuing** *  **adyenForPlatformsAdvanced** *  **adyenCapital** *  **adyenAccount** *  **adyenCard** *  **adyenFranchisee** *  **adyenPccr** *  **adyenChargeCard**
    */
    'type'?: AcceptTermsOfServiceResponse.TypeEnum;
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
export declare namespace AcceptTermsOfServiceResponse {
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
