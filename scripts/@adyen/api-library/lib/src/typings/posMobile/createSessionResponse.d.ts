export declare class CreateSessionResponse {
    /**
    * The unique identifier of the session.
    */
    'id'?: string;
    /**
    * The unique identifier of the SDK installation. If you create the [Terminal API](https://docs.adyen.com/point-of-sale/design-your-integration/terminal-api/) transaction request on your backend, use this as the `POIID` in the `MessageHeader` of the request.
    */
    'installationId'?: string;
    /**
    * The unique identifier of your merchant account.
    */
    'merchantAccount'?: string;
    /**
    * The data that the SDK uses to authenticate responses from the Adyen payments platform. Pass this value to your POS app.
    */
    'sdkData'?: string;
    /**
    * The unique identifier of the store that you want to process transactions for.
    */
    'store'?: string;
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
