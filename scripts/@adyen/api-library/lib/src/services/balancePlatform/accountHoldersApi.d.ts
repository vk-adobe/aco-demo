import Service from "../../service";
import Client from "../../client";
import { AccountHolder, AccountHolderInfo, AccountHolderUpdateRequest, GetTaxFormResponse, PaginatedBalanceAccountsResponse, TransactionRulesResponse } from "../../typings/balancePlatform/models";
import { IRequest } from "../../typings/requestOptions";
export declare class AccountHoldersApi extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Create an account holder
    * @param accountHolderInfo {@link AccountHolderInfo }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link AccountHolder }
    */
    createAccountHolder(accountHolderInfo: AccountHolderInfo, requestOptions?: IRequest.Options): Promise<AccountHolder>;
    /**
    * @summary Get an account holder
    * @param id {@link string } The unique identifier of the account holder.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link AccountHolder }
    */
    getAccountHolder(id: string, requestOptions?: IRequest.Options): Promise<AccountHolder>;
    /**
    * @summary Get all balance accounts of an account holder
    * @param id {@link string } The unique identifier of the account holder.
    * @param requestOptions {@link IRequest.Options }
    * @param offset {@link number } The number of items that you want to skip.
    * @param limit {@link number } The number of items returned per page, maximum 100 items. By default, the response returns 10 items per page.
    * @return {@link PaginatedBalanceAccountsResponse }
    */
    getAllBalanceAccountsOfAccountHolder(id: string, offset?: number, limit?: number, requestOptions?: IRequest.Options): Promise<PaginatedBalanceAccountsResponse>;
    /**
    * @summary Get all transaction rules for an account holder
    * @param id {@link string } The unique identifier of the account holder.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link TransactionRulesResponse }
    */
    getAllTransactionRulesForAccountHolder(id: string, requestOptions?: IRequest.Options): Promise<TransactionRulesResponse>;
    /**
    * @summary Get a tax form
    * @param id {@link string } The unique identifier of the account holder.
    * @param requestOptions {@link IRequest.Options }
    * @param formType {@link &#39;US1099k&#39; | &#39;US1099nec&#39; } The type of tax form you want to retrieve. Accepted values are **US1099k** and **US1099nec**
    * @param year {@link number } The tax year in YYYY format for the tax form you want to retrieve
    * @return {@link GetTaxFormResponse }
    */
    getTaxForm(id: string, formType?: "US1099k" | "US1099nec", year?: number, requestOptions?: IRequest.Options): Promise<GetTaxFormResponse>;
    /**
    * @summary Update an account holder
    * @param id {@link string } The unique identifier of the account holder.
    * @param accountHolderUpdateRequest {@link AccountHolderUpdateRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link AccountHolder }
    */
    updateAccountHolder(id: string, accountHolderUpdateRequest: AccountHolderUpdateRequest, requestOptions?: IRequest.Options): Promise<AccountHolder>;
}
