import Service from "../../service";
import Client from "../../client";
import { CompanyApiCredential, CreateCompanyApiCredentialRequest, CreateCompanyApiCredentialResponse, ListCompanyApiCredentialsResponse, UpdateCompanyApiCredentialRequest } from "../../typings/management/models";
import { IRequest } from "../../typings/requestOptions";
export declare class APICredentialsCompanyLevelApi extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Create an API credential.
    * @param companyId {@link string } The unique identifier of the company account.
    * @param createCompanyApiCredentialRequest {@link CreateCompanyApiCredentialRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link CreateCompanyApiCredentialResponse }
    */
    createApiCredential(companyId: string, createCompanyApiCredentialRequest: CreateCompanyApiCredentialRequest, requestOptions?: IRequest.Options): Promise<CreateCompanyApiCredentialResponse>;
    /**
    * @summary Get an API credential
    * @param companyId {@link string } The unique identifier of the company account.
    * @param apiCredentialId {@link string } Unique identifier of the API credential.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link CompanyApiCredential }
    */
    getApiCredential(companyId: string, apiCredentialId: string, requestOptions?: IRequest.Options): Promise<CompanyApiCredential>;
    /**
    * @summary Get a list of API credentials
    * @param companyId {@link string } The unique identifier of the company account.
    * @param requestOptions {@link IRequest.Options }
    * @param pageNumber {@link number } The number of the page to fetch.
    * @param pageSize {@link number } The number of items to have on a page, maximum 100. The default is 10 items on a page.
    * @return {@link ListCompanyApiCredentialsResponse }
    */
    listApiCredentials(companyId: string, pageNumber?: number, pageSize?: number, requestOptions?: IRequest.Options): Promise<ListCompanyApiCredentialsResponse>;
    /**
    * @summary Update an API credential.
    * @param companyId {@link string } The unique identifier of the company account.
    * @param apiCredentialId {@link string } Unique identifier of the API credential.
    * @param updateCompanyApiCredentialRequest {@link UpdateCompanyApiCredentialRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link CompanyApiCredential }
    */
    updateApiCredential(companyId: string, apiCredentialId: string, updateCompanyApiCredentialRequest: UpdateCompanyApiCredentialRequest, requestOptions?: IRequest.Options): Promise<CompanyApiCredential>;
}
