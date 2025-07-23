export declare class TransferRequestReview {
    /**
    * Specifies the number of [approvals](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers/approve) required to process the transfer.
    */
    'numberOfApprovalsRequired'?: number;
    /**
    * Specifies whether you will initiate Strong Customer Authentication (SCA) in thePOST [/transfers/approve](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers/approve) request.  Only applies to transfers made with an Adyen [business account](https://docs.adyen.com/platforms/business-accounts).
    */
    'scaOnApproval'?: boolean;
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
