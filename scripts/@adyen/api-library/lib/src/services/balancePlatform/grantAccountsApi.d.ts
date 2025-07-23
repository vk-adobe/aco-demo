import Service from "../../service";
import Client from "../../client";
import { CapitalGrantAccount } from "../../typings/balancePlatform/models";
import { IRequest } from "../../typings/requestOptions";
export declare class GrantAccountsApi extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Get a grant account
    * @param id {@link string } The unique identifier of the grant account.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link CapitalGrantAccount }
    *
    * @deprecated since Configuration API v2
    * Use the `/grantAccounts/{id}` endpoint from the [Capital API](https://docs.adyen.com/api-explorer/capital/latest/get/grantAccounts/(id)) instead.
    */
    getGrantAccount(id: string, requestOptions?: IRequest.Options): Promise<CapitalGrantAccount>;
}
