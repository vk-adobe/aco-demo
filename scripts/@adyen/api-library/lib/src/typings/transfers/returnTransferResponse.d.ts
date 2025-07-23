export declare class ReturnTransferResponse {
    /**
    * The unique identifier of the return.
    */
    'id'?: string;
    /**
    * Your internal reference for the return.
    */
    'reference'?: string;
    /**
    * The resulting status of the return.  Possible values: **Authorised**, **Declined**.
    */
    'status'?: ReturnTransferResponse.StatusEnum;
    /**
    * The unique identifier of the original transfer.
    */
    'transferId'?: string;
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
export declare namespace ReturnTransferResponse {
    enum StatusEnum {
        Authorised = "Authorised",
        Declined = "Declined"
    }
}
