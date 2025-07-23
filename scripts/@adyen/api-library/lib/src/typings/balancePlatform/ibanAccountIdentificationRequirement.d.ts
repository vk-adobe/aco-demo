export declare class IbanAccountIdentificationRequirement {
    /**
    * Specifies the allowed prefixes for the international bank account number as defined in the ISO-13616 standard.
    */
    'description'?: string;
    /**
    * Contains the list of allowed prefixes for international bank accounts. For example: NL, US, UK.
    */
    'ibanPrefixes'?: Array<string>;
    /**
    * **ibanAccountIdentificationRequirement**
    */
    'type': IbanAccountIdentificationRequirement.TypeEnum;
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
export declare namespace IbanAccountIdentificationRequirement {
    enum TypeEnum {
        IbanAccountIdentificationRequirement = "ibanAccountIdentificationRequirement"
    }
}
