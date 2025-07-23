import { DisputeServiceResult } from './disputeServiceResult';
export declare class DefendDisputeResponse {
    'disputeServiceResult': DisputeServiceResult;
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
