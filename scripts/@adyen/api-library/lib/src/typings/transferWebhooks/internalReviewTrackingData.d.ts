export declare class InternalReviewTrackingData {
    /**
    * The reason why the transfer failed Adyen\'s internal review.   Possible values:  - **refusedForRegulatoryReasons**: the transfer does not comply with Adyen\'s risk policy. For more information, [contact the Support Team](https://www.adyen.help/hc/en-us/requests/new).
    */
    'reason'?: InternalReviewTrackingData.ReasonEnum;
    /**
    * The status of the transfer.  Possible values:   - **pending**: the transfer is under internal review.  - **failed**: the transfer failed Adyen\'s internal review. For details, see `reason`.
    */
    'status': InternalReviewTrackingData.StatusEnum;
    /**
    * The type of tracking event.   Possible values:    - **internalReview**: the transfer was flagged because it does not comply with Adyen\'s risk policy.
    */
    'type': InternalReviewTrackingData.TypeEnum;
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
export declare namespace InternalReviewTrackingData {
    enum ReasonEnum {
        RefusedForRegulatoryReasons = "refusedForRegulatoryReasons"
    }
    enum StatusEnum {
        Pending = "pending",
        Failed = "failed"
    }
    enum TypeEnum {
        InternalReview = "internalReview"
    }
}
