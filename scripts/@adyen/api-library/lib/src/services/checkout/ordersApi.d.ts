import Service from "../../service";
import Client from "../../client";
import { BalanceCheckRequest, BalanceCheckResponse, CancelOrderRequest, CancelOrderResponse, CreateOrderRequest, CreateOrderResponse } from "../../typings/checkout/models";
import { IRequest } from "../../typings/requestOptions";
export declare class OrdersApi extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Cancel an order
    * @param cancelOrderRequest {@link CancelOrderRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link CancelOrderResponse }
    */
    cancelOrder(cancelOrderRequest: CancelOrderRequest, requestOptions?: IRequest.Options): Promise<CancelOrderResponse>;
    /**
    * @summary Get the balance of a gift card
    * @param balanceCheckRequest {@link BalanceCheckRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link BalanceCheckResponse }
    */
    getBalanceOfGiftCard(balanceCheckRequest: BalanceCheckRequest, requestOptions?: IRequest.Options): Promise<BalanceCheckResponse>;
    /**
    * @summary Create an order
    * @param createOrderRequest {@link CreateOrderRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link CreateOrderResponse }
    */
    orders(createOrderRequest: CreateOrderRequest, requestOptions?: IRequest.Options): Promise<CreateOrderResponse>;
}
