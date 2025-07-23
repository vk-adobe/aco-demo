import Service from "../../service";
import Client from "../../client";
import { BillingEntitiesResponse, ShippingLocation, ShippingLocationsResponse, TerminalModelsResponse, TerminalOrder, TerminalOrderRequest, TerminalOrdersResponse, TerminalProductsResponse } from "../../typings/management/models";
import { IRequest } from "../../typings/requestOptions";
export declare class TerminalOrdersMerchantLevelApi extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Cancel an order
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param orderId {@link string } The unique identifier of the order.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link TerminalOrder }
    */
    cancelOrder(merchantId: string, orderId: string, requestOptions?: IRequest.Options): Promise<TerminalOrder>;
    /**
    * @summary Create an order
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param terminalOrderRequest {@link TerminalOrderRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link TerminalOrder }
    */
    createOrder(merchantId: string, terminalOrderRequest: TerminalOrderRequest, requestOptions?: IRequest.Options): Promise<TerminalOrder>;
    /**
    * @summary Create a shipping location
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param shippingLocation {@link ShippingLocation }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link ShippingLocation }
    */
    createShippingLocation(merchantId: string, shippingLocation: ShippingLocation, requestOptions?: IRequest.Options): Promise<ShippingLocation>;
    /**
    * @summary Get an order
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param orderId {@link string } The unique identifier of the order.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link TerminalOrder }
    */
    getOrder(merchantId: string, orderId: string, requestOptions?: IRequest.Options): Promise<TerminalOrder>;
    /**
    * @summary Get a list of billing entities
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param requestOptions {@link IRequest.Options }
    * @param name {@link string } The name of the billing entity.
    * @return {@link BillingEntitiesResponse }
    */
    listBillingEntities(merchantId: string, name?: string, requestOptions?: IRequest.Options): Promise<BillingEntitiesResponse>;
    /**
    * @summary Get a list of orders
    * @param merchantId {@link string }
    * @param requestOptions {@link IRequest.Options }
    * @param customerOrderReference {@link string } Your purchase order number.
    * @param status {@link string } The order status. Possible values (not case-sensitive): Placed, Confirmed, Cancelled, Shipped, Delivered.
    * @param offset {@link number } The number of orders to skip.
    * @param limit {@link number } The number of orders to return.
    * @return {@link TerminalOrdersResponse }
    */
    listOrders(merchantId: string, customerOrderReference?: string, status?: string, offset?: number, limit?: number, requestOptions?: IRequest.Options): Promise<TerminalOrdersResponse>;
    /**
    * @summary Get a list of shipping locations
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param requestOptions {@link IRequest.Options }
    * @param name {@link string } The name of the shipping location.
    * @param offset {@link number } The number of locations to skip.
    * @param limit {@link number } The number of locations to return.
    * @return {@link ShippingLocationsResponse }
    */
    listShippingLocations(merchantId: string, name?: string, offset?: number, limit?: number, requestOptions?: IRequest.Options): Promise<ShippingLocationsResponse>;
    /**
    * @summary Get a list of terminal models
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link TerminalModelsResponse }
    */
    listTerminalModels(merchantId: string, requestOptions?: IRequest.Options): Promise<TerminalModelsResponse>;
    /**
    * @summary Get a list of terminal products
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param requestOptions {@link IRequest.Options }
    * @param country {@link string } The country to return products for, in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. For example, **US**
    * @param terminalModelId {@link string } The terminal model to return products for. Use the ID returned in the [GET &#x60;/terminalModels&#x60;](https://docs.adyen.com/api-explorer/#/ManagementService/latest/get/merchants/{merchantId}/terminalModels) response. For example, **Verifone.M400**
    * @param offset {@link number } The number of products to skip.
    * @param limit {@link number } The number of products to return.
    * @return {@link TerminalProductsResponse }
    */
    listTerminalProducts(merchantId: string, country?: string, terminalModelId?: string, offset?: number, limit?: number, requestOptions?: IRequest.Options): Promise<TerminalProductsResponse>;
    /**
    * @summary Update an order
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param orderId {@link string } The unique identifier of the order.
    * @param terminalOrderRequest {@link TerminalOrderRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link TerminalOrder }
    */
    updateOrder(merchantId: string, orderId: string, terminalOrderRequest: TerminalOrderRequest, requestOptions?: IRequest.Options): Promise<TerminalOrder>;
}
