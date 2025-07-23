import Service from "../../service";
import Client from "../../client";
import { CapitalGrant, CapitalGrantInfo, CapitalGrants } from "../../typings/transfers/models";
import { IRequest } from "../../typings/requestOptions";
export declare class CapitalApi extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Get a capital account
    * @param requestOptions {@link IRequest.Options }
    * @param counterpartyAccountHolderId {@link string } The counterparty account holder id.
    * @return {@link CapitalGrants }
    *
    * @deprecated since Transfers API v4
    * Use the `/grants` endpoint from the [Capital API](https://docs.adyen.com/api-explorer/capital/latest/get/grants) instead.
    */
    getCapitalAccount(counterpartyAccountHolderId?: string, requestOptions?: IRequest.Options): Promise<CapitalGrants>;
    /**
    * @summary Get grant reference details
    * @param id {@link string } The unique identifier of the grant.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link CapitalGrant }
    *
    * @deprecated since Transfers API v4
    * Use the `/grants/{grantId}` endpoint from the [Capital API](https://docs.adyen.com/api-explorer/capital/latest/get/grants/(grantId)) instead.
    */
    getGrantReferenceDetails(id: string, requestOptions?: IRequest.Options): Promise<CapitalGrant>;
    /**
    * @summary Request a grant payout
    * @param capitalGrantInfo {@link CapitalGrantInfo }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link CapitalGrant }
    *
    * @deprecated since Transfers API v4
    * Use the `/grants` endpoint from the [Capital API](https://docs.adyen.com/api-explorer/capital/latest/post/grants) instead.
    */
    requestGrantPayout(capitalGrantInfo: CapitalGrantInfo, requestOptions?: IRequest.Options): Promise<CapitalGrant>;
}
