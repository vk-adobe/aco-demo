export declare class BRLocalAccountIdentification {
    /**
    * The bank account number, without separators or whitespace.
    */
    'accountNumber': string;
    /**
    * The 3-digit bank code, with leading zeros.
    */
    'bankCode': string;
    /**
    * The bank account branch number, without separators or whitespace.
    */
    'branchNumber': string;
    /**
    * The 8-digit ISPB, with leading zeros.
    */
    'ispb'?: string;
    /**
    * **brLocal**
    */
    'type': BRLocalAccountIdentification.TypeEnum;
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
export declare namespace BRLocalAccountIdentification {
    enum TypeEnum {
        BrLocal = "brLocal"
    }
}
