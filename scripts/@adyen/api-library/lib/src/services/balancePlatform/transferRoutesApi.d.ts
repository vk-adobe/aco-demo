import Service from "../../service";
import Client from "../../client";
import { TransferRouteRequest, TransferRouteResponse } from "../../typings/balancePlatform/models";
import { IRequest } from "../../typings/requestOptions";
export declare class TransferRoutesApi extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Calculate transfer routes
    * @param transferRouteRequest {@link TransferRouteRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link TransferRouteResponse }
    */
    calculateTransferRoutes(transferRouteRequest: TransferRouteRequest, requestOptions?: IRequest.Options): Promise<TransferRouteResponse>;
}
