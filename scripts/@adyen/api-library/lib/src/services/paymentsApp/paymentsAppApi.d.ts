import Service from "../../service";
import Client from "../../client";
import { BoardingTokenRequest, BoardingTokenResponse, PaymentsAppResponse } from "../../typings/paymentsApp/models";
import { IRequest } from "../../typings/requestOptions";
export declare class PaymentsAppApi extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Create a boarding token - merchant level
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param boardingTokenRequest {@link BoardingTokenRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link BoardingTokenResponse }
    */
    generatePaymentsAppBoardingTokenForMerchant(merchantId: string, boardingTokenRequest: BoardingTokenRequest, requestOptions?: IRequest.Options): Promise<BoardingTokenResponse>;
    /**
    * @summary Create a boarding token - store level
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param storeId {@link string } The unique identifier of the store.
    * @param boardingTokenRequest {@link BoardingTokenRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link BoardingTokenResponse }
    */
    generatePaymentsAppBoardingTokenForStore(merchantId: string, storeId: string, boardingTokenRequest: BoardingTokenRequest, requestOptions?: IRequest.Options): Promise<BoardingTokenResponse>;
    /**
    * @summary Get a list of Payments Apps - merchant level
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param requestOptions {@link IRequest.Options }
    * @param statuses {@link string } The status of the Payments App. Comma-separated list of one or more values. If no value is provided, the list returns all statuses.   Possible values:  * **BOARDED**   * **REVOKED**
    * @param limit {@link number } The number of items to return.
    * @param offset {@link number } The number of items to skip.
    * @return {@link PaymentsAppResponse }
    */
    listPaymentsAppForMerchant(merchantId: string, statuses?: string, limit?: number, offset?: number, requestOptions?: IRequest.Options): Promise<PaymentsAppResponse>;
    /**
    * @summary Get a list of Payments Apps - store level
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param storeId {@link string } The unique identifier of the store.
    * @param requestOptions {@link IRequest.Options }
    * @param statuses {@link string } The status of the Payments App. Comma-separated list of one or more values. If no value is provided, the list returns all statuses.   Possible values:  * **BOARDED**   * **REVOKED**
    * @param limit {@link number } The number of items to return.
    * @param offset {@link number } The number of items to skip.
    * @return {@link PaymentsAppResponse }
    */
    listPaymentsAppForStore(merchantId: string, storeId: string, statuses?: string, limit?: number, offset?: number, requestOptions?: IRequest.Options): Promise<PaymentsAppResponse>;
    /**
    * @summary Revoke Payments App instance authentication
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param installationId {@link string } The unique identifier of the Payments App instance on a device.
    * @param requestOptions {@link IRequest.Options }
    */
    revokePaymentsApp(merchantId: string, installationId: string, requestOptions?: IRequest.Options): Promise<void>;
}
