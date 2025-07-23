export declare class GetTermsOfServiceDocumentRequest {
    /**
    * The language to be used for the Terms of Service document, specified by the two-letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code. Possible value: **en** for English.
    */
    'language': string;
    /**
    * The requested format for the Terms of Service document. Default value: JSON. Possible values: **JSON**, **PDF**, or **TXT**.
    */
    'termsOfServiceDocumentFormat'?: string;
    /**
    * The type of Terms of Service.  Possible values: *  **adyenForPlatformsManage** *  **adyenIssuing** *  **adyenForPlatformsAdvanced** *  **adyenCapital** *  **adyenAccount** *  **adyenCard** *  **adyenFranchisee** *  **adyenPccr** *  **adyenChargeCard**
    */
    'type': GetTermsOfServiceDocumentRequest.TypeEnum;
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
export declare namespace GetTermsOfServiceDocumentRequest {
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
