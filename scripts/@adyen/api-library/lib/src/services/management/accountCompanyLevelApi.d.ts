import Service from "../../service";
import Client from "../../client";
import { Company, ListCompanyResponse, ListMerchantResponse } from "../../typings/management/models";
import { IRequest } from "../../typings/requestOptions";
export declare class AccountCompanyLevelApi extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Get a company account
    * @param companyId {@link string } The unique identifier of the company account.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link Company }
    */
    getCompanyAccount(companyId: string, requestOptions?: IRequest.Options): Promise<Company>;
    /**
    * @summary Get a list of company accounts
    * @param requestOptions {@link IRequest.Options }
    * @param pageNumber {@link number } The number of the page to fetch.
    * @param pageSize {@link number } The number of items to have on a page, maximum 100. The default is 10 items on a page.
    * @return {@link ListCompanyResponse }
    */
    listCompanyAccounts(pageNumber?: number, pageSize?: number, requestOptions?: IRequest.Options): Promise<ListCompanyResponse>;
    /**
    * @summary Get a list of merchant accounts
    * @param companyId {@link string } The unique identifier of the company account.
    * @param requestOptions {@link IRequest.Options }
    * @param pageNumber {@link number } The number of the page to fetch.
    * @param pageSize {@link number } The number of items to have on a page, maximum 100. The default is 10 items on a page.
    * @return {@link ListMerchantResponse }
    */
    listMerchantAccounts(companyId: string, pageNumber?: number, pageSize?: number, requestOptions?: IRequest.Options): Promise<ListMerchantResponse>;
}
