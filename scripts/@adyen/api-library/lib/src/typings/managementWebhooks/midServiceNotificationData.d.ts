export declare class MidServiceNotificationData {
    /**
    * Indicates whether receiving payments is allowed. This value is set to **true** by Adyen after screening your merchant account.
    */
    'allowed'?: boolean;
    /**
    * Indicates whether the payment method is enabled (**true**) or disabled (**false**).
    */
    'enabled'?: boolean;
    /**
    * The unique identifier of the resource.
    */
    'id': string;
    /**
    * The unique identifier of the merchant account.
    */
    'merchantId': string;
    /**
    * Your reference for the payment method.
    */
    'reference'?: string;
    /**
    * The status of the request to add a payment method. Possible values:  * **success**: the payment method was added. * **failure**: the request failed. * **capabilityPending**: the **receivePayments** capability is not allowed.
    */
    'status': MidServiceNotificationData.StatusEnum;
    /**
    * The unique identifier of the [store](https://docs.adyen.com/api-explorer/#/ManagementService/latest/post/merchants/{id}/paymentMethodSettings__reqParam_storeId), if any.
    */
    'storeId'?: string;
    /**
    * Payment method [variant](https://docs.adyen.com/development-resources/paymentmethodvariant#management-api).
    */
    'type': string;
    /**
    * Payment method status. Possible values: * **valid** * **pending** * **invalid** * **rejected**
    */
    'verificationStatus'?: MidServiceNotificationData.VerificationStatusEnum;
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
export declare namespace MidServiceNotificationData {
    enum StatusEnum {
        Success = "success",
        Failure = "failure",
        CapabilityPending = "capabilityPending",
        DataRequired = "dataRequired",
        UpdatesExpected = "updatesExpected"
    }
    enum VerificationStatusEnum {
        Valid = "valid",
        Pending = "pending",
        Invalid = "invalid",
        Rejected = "rejected"
    }
}
