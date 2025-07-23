export declare class CardOrder {
    /**
    * The date when the card order is created.
    */
    'beginDate'?: Date;
    /**
    * The unique identifier of the card manufacturer profile.
    */
    'cardManufacturingProfileId'?: string;
    /**
    * The date when the card order processing ends.
    */
    'closedDate'?: Date;
    /**
    * The date when you manually closed the card order.  Card orders are automatically closed by the end of the day it was created. If you manually closed it beforehand, the closing date is shown as the `endDate`.
    */
    'endDate'?: Date;
    /**
    * The unique identifier of the card order.
    */
    'id'?: string;
    /**
    * The date when the card order processing begins.
    */
    'lockDate'?: Date;
    /**
    * The service center.
    */
    'serviceCenter'?: string;
    /**
    * The status of the card order.  Possible values: **Open**, **Closed**.
    */
    'status'?: CardOrder.StatusEnum;
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
export declare namespace CardOrder {
    enum StatusEnum {
        Closed = "closed",
        Open = "open"
    }
}
