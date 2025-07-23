import { TransactionDescriptionInfo } from './transactionDescriptionInfo';
export declare class GenericPmWithTdiInfo {
    'transactionDescription'?: TransactionDescriptionInfo | null;
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
