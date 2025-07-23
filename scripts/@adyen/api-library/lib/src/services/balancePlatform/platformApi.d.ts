import Service from "../../service";
import Client from "../../client";
import { BalancePlatform, PaginatedAccountHoldersResponse, TransactionRulesResponse } from "../../typings/balancePlatform/models";
import { IRequest } from "../../typings/requestOptions";
export declare class PlatformApi extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Get all account holders under a balance platform
    * @param id {@link string } The unique identifier of the balance platform.
    * @param requestOptions {@link IRequest.Options }
    * @param offset {@link number } The number of items that you want to skip.
    * @param limit {@link number } The number of items returned per page, maximum 100 items. By default, the response returns 10 items per page.
    * @return {@link PaginatedAccountHoldersResponse }
    */
    getAllAccountHoldersUnderBalancePlatform(id: string, offset?: number, limit?: number, requestOptions?: IRequest.Options): Promise<PaginatedAccountHoldersResponse>;
    /**
    * @summary Get all transaction rules for a balance platform
    * @param id {@link string } The unique identifier of the balance platform.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link TransactionRulesResponse }
    */
    getAllTransactionRulesForBalancePlatform(id: string, requestOptions?: IRequest.Options): Promise<TransactionRulesResponse>;
    /**
    * @summary Get a balance platform
    * @param id {@link string } The unique identifier of the balance platform.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link BalancePlatform }
    */
    getBalancePlatform(id: string, requestOptions?: IRequest.Options): Promise<BalancePlatform>;
}
