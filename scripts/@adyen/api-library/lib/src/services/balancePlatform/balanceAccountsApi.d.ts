import Service from "../../service";
import Client from "../../client";
import { BalanceAccount, BalanceAccountInfo, BalanceAccountUpdateRequest, BalanceSweepConfigurationsResponse, CreateSweepConfigurationV2, PaginatedPaymentInstrumentsResponse, SweepConfigurationV2, TransactionRulesResponse, UpdateSweepConfigurationV2 } from "../../typings/balancePlatform/models";
import { IRequest } from "../../typings/requestOptions";
export declare class BalanceAccountsApi extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Create a balance account
    * @param balanceAccountInfo {@link BalanceAccountInfo }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link BalanceAccount }
    */
    createBalanceAccount(balanceAccountInfo: BalanceAccountInfo, requestOptions?: IRequest.Options): Promise<BalanceAccount>;
    /**
    * @summary Create a sweep
    * @param balanceAccountId {@link string } The unique identifier of the balance account.
    * @param createSweepConfigurationV2 {@link CreateSweepConfigurationV2 }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link SweepConfigurationV2 }
    */
    createSweep(balanceAccountId: string, createSweepConfigurationV2: CreateSweepConfigurationV2, requestOptions?: IRequest.Options): Promise<SweepConfigurationV2>;
    /**
    * @summary Delete a sweep
    * @param balanceAccountId {@link string } The unique identifier of the balance account.
    * @param sweepId {@link string } The unique identifier of the sweep.
    * @param requestOptions {@link IRequest.Options }
    */
    deleteSweep(balanceAccountId: string, sweepId: string, requestOptions?: IRequest.Options): Promise<void>;
    /**
    * @summary Get all sweeps for a balance account
    * @param balanceAccountId {@link string } The unique identifier of the balance account.
    * @param requestOptions {@link IRequest.Options }
    * @param offset {@link number } The number of items that you want to skip.
    * @param limit {@link number } The number of items returned per page, maximum 100 items. By default, the response returns 10 items per page.
    * @return {@link BalanceSweepConfigurationsResponse }
    */
    getAllSweepsForBalanceAccount(balanceAccountId: string, offset?: number, limit?: number, requestOptions?: IRequest.Options): Promise<BalanceSweepConfigurationsResponse>;
    /**
    * @summary Get all transaction rules for a balance account
    * @param id {@link string } The unique identifier of the balance account.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link TransactionRulesResponse }
    */
    getAllTransactionRulesForBalanceAccount(id: string, requestOptions?: IRequest.Options): Promise<TransactionRulesResponse>;
    /**
    * @summary Get a balance account
    * @param id {@link string } The unique identifier of the balance account.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link BalanceAccount }
    */
    getBalanceAccount(id: string, requestOptions?: IRequest.Options): Promise<BalanceAccount>;
    /**
    * @summary Get payment instruments linked to a balance account
    * @param id {@link string } The unique identifier of the balance account.
    * @param requestOptions {@link IRequest.Options }
    * @param offset {@link number } The number of items that you want to skip.
    * @param limit {@link number } The number of items returned per page, maximum 100 items. By default, the response returns 10 items per page.
    * @param status {@link string } The status of the payment instruments that you want to get. By default, the response includes payment instruments with any status.
    * @return {@link PaginatedPaymentInstrumentsResponse }
    */
    getPaymentInstrumentsLinkedToBalanceAccount(id: string, offset?: number, limit?: number, status?: string, requestOptions?: IRequest.Options): Promise<PaginatedPaymentInstrumentsResponse>;
    /**
    * @summary Get a sweep
    * @param balanceAccountId {@link string } The unique identifier of the balance account.
    * @param sweepId {@link string } The unique identifier of the sweep.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link SweepConfigurationV2 }
    */
    getSweep(balanceAccountId: string, sweepId: string, requestOptions?: IRequest.Options): Promise<SweepConfigurationV2>;
    /**
    * @summary Update a balance account
    * @param id {@link string } The unique identifier of the balance account.
    * @param balanceAccountUpdateRequest {@link BalanceAccountUpdateRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link BalanceAccount }
    */
    updateBalanceAccount(id: string, balanceAccountUpdateRequest: BalanceAccountUpdateRequest, requestOptions?: IRequest.Options): Promise<BalanceAccount>;
    /**
    * @summary Update a sweep
    * @param balanceAccountId {@link string } The unique identifier of the balance account.
    * @param sweepId {@link string } The unique identifier of the sweep.
    * @param updateSweepConfigurationV2 {@link UpdateSweepConfigurationV2 }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link SweepConfigurationV2 }
    */
    updateSweep(balanceAccountId: string, sweepId: string, updateSweepConfigurationV2: UpdateSweepConfigurationV2, requestOptions?: IRequest.Options): Promise<SweepConfigurationV2>;
}
