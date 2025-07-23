import Service from "../../service";
import Client from "../../client";
import { GrantOffer, GrantOffers } from "../../typings/balancePlatform/models";
import { IRequest } from "../../typings/requestOptions";
export declare class GrantOffersApi extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Get all available grant offers
    * @param requestOptions {@link IRequest.Options }
    * @param accountHolderId {@link string } The unique identifier of the grant account.
    * @return {@link GrantOffers }
    *
    * @deprecated since Configuration API v2
    * Use the `/grantOffers` endpoint from the [Capital API](https://docs.adyen.com/api-explorer/capital/latest/get/grantOffers) instead.
    */
    getAllAvailableGrantOffers(accountHolderId?: string, requestOptions?: IRequest.Options): Promise<GrantOffers>;
    /**
    * @summary Get a grant offer
    * @param grantOfferId {@link string } The unique identifier of the grant offer.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link GrantOffer }
    *
    * @deprecated since Configuration API v2
    * Use the `/grantOffers/{id}` endpoint from the [Capital API](https://docs.adyen.com/api-explorer/capital/latest/get/grantOffers/(id)) instead.
    */
    getGrantOffer(grantOfferId: string, requestOptions?: IRequest.Options): Promise<GrantOffer>;
}
