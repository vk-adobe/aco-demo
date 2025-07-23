import Service from "../../service";
import Client from "../../client";
import { Transaction, TransactionSearchResponse } from "../../typings/transfers/models";
import { IRequest } from "../../typings/requestOptions";
export declare class TransactionsApi extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Get all transactions
    * @param requestOptions {@link IRequest.Options }
    * @param balancePlatform {@link string } The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id).  Required if you don\&#39;t provide a &#x60;balanceAccountId&#x60; or &#x60;accountHolderId&#x60;.
    * @param paymentInstrumentId {@link string } The unique identifier of the [payment instrument](https://docs.adyen.com/api-explorer/balanceplatform/latest/get/paymentInstruments/_id_).  To use this parameter, you must also provide a &#x60;balanceAccountId&#x60;, &#x60;accountHolderId&#x60;, or &#x60;balancePlatform&#x60;.  The &#x60;paymentInstrumentId&#x60; must be related to the &#x60;balanceAccountId&#x60; or &#x60;accountHolderId&#x60; that you provide.
    * @param accountHolderId {@link string } The unique identifier of the [account holder](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/accountHolders/{id}__queryParam_id).  Required if you don\&#39;t provide a &#x60;balanceAccountId&#x60; or &#x60;balancePlatform&#x60;.  If you provide a &#x60;balanceAccountId&#x60;, the &#x60;accountHolderId&#x60; must be related to the &#x60;balanceAccountId&#x60;.
    * @param balanceAccountId {@link string } The unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balanceAccounts/{id}__queryParam_id).  Required if you don\&#39;t provide an &#x60;accountHolderId&#x60; or &#x60;balancePlatform&#x60;.  If you provide an &#x60;accountHolderId&#x60;, the &#x60;balanceAccountId&#x60; must be related to the &#x60;accountHolderId&#x60;.
    * @param cursor {@link string } The &#x60;cursor&#x60; returned in the links of the previous response.
    * @param createdSince {@link Date } Only include transactions that have been created on or after this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**.
    * @param createdUntil {@link Date } Only include transactions that have been created on or before this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**.
    * @param limit {@link number } The number of items returned per page, maximum of 100 items. By default, the response returns 10 items per page.
    * @return {@link TransactionSearchResponse }
    */
    getAllTransactions(balancePlatform?: string, paymentInstrumentId?: string, accountHolderId?: string, balanceAccountId?: string, cursor?: string, createdSince?: Date, createdUntil?: Date, limit?: number, requestOptions?: IRequest.Options): Promise<TransactionSearchResponse>;
    /**
    * @summary Get a transaction
    * @param id {@link string } The unique identifier of the transaction.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link Transaction }
    */
    getTransaction(id: string, requestOptions?: IRequest.Options): Promise<Transaction>;
}
