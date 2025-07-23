import Service from "../../service";
import Client from "../../client";
import { PaginatedGetCardOrderItemResponse, PaginatedGetCardOrderResponse } from "../../typings/balancePlatform/models";
import { IRequest } from "../../typings/requestOptions";
export declare class CardOrdersApi extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Get card order items
    * @param id {@link string } The unique identifier of the card order.
    * @param requestOptions {@link IRequest.Options }
    * @param offset {@link number } Specifies the position of an element in a list of card orders. The response includes a list of card order items that starts at the specified offset.  **Default:** 0, which means that the response contains all the elements in the list of card order items.
    * @param limit {@link number } The number of card order items returned per page. **Default:** 10.
    * @return {@link PaginatedGetCardOrderItemResponse }
    */
    getCardOrderItems(id: string, offset?: number, limit?: number, requestOptions?: IRequest.Options): Promise<PaginatedGetCardOrderItemResponse>;
    /**
    * @summary Get a list of card orders
    * @param requestOptions {@link IRequest.Options }
    * @param id {@link string } The unique identifier of the card order.
    * @param cardManufacturingProfileId {@link string } The unique identifier of the card manufacturer profile.
    * @param status {@link string } The status of the card order.
    * @param txVariantCode {@link string } The unique code of the card manufacturer profile.  Possible values: **mcmaestro**, **mc**, **visa**, **mcdebit**.
    * @param createdSince {@link Date } Only include card orders that have been created on or after this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**.
    * @param createdUntil {@link Date } Only include card orders that have been created on or before this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**.
    * @param lockedSince {@link Date } Only include card orders that have been locked on or after this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**.
    * @param lockedUntil {@link Date } Only include card orders that have been locked on or before this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**.
    * @param serviceCenter {@link string } The service center at which the card is issued. The value is case-sensitive.
    * @param offset {@link number } Specifies the position of an element in a list of card orders. The response includes a list of card orders that starts at the specified offset.  **Default:** 0, which means that the response contains all the elements in the list of card orders.
    * @param limit {@link number } The number of card orders returned per page. **Default:** 10.
    * @return {@link PaginatedGetCardOrderResponse }
    */
    listCardOrders(id?: string, cardManufacturingProfileId?: string, status?: string, txVariantCode?: string, createdSince?: Date, createdUntil?: Date, lockedSince?: Date, lockedUntil?: Date, serviceCenter?: string, offset?: number, limit?: number, requestOptions?: IRequest.Options): Promise<PaginatedGetCardOrderResponse>;
}
