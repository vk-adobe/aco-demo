import Service from "../../service";
import Client from "../../client";
import { GetNetworkTokenResponse, UpdateNetworkTokenRequest } from "../../typings/balancePlatform/models";
import { IRequest } from "../../typings/requestOptions";
export declare class NetworkTokensApi extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Get a network token
    * @param networkTokenId {@link string } The unique identifier of the network token.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link GetNetworkTokenResponse }
    */
    getNetworkToken(networkTokenId: string, requestOptions?: IRequest.Options): Promise<GetNetworkTokenResponse>;
    /**
    * @summary Update a network token
    * @param networkTokenId {@link string } The unique identifier of the network token.
    * @param updateNetworkTokenRequest {@link UpdateNetworkTokenRequest }
    * @param requestOptions {@link IRequest.Options }
    */
    updateNetworkToken(networkTokenId: string, updateNetworkTokenRequest: UpdateNetworkTokenRequest, requestOptions?: IRequest.Options): Promise<void>;
}
