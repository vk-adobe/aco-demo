import Client from "../client";
import Service from "../service";
import { AcceptDisputeRequest } from "../typings/disputes/models";
import { AcceptDisputeResponse } from "../typings/disputes/models";
import { DefendDisputeRequest } from "../typings/disputes/models";
import { DefendDisputeResponse } from "../typings/disputes/models";
import { DefenseReasonsRequest } from "../typings/disputes/models";
import { DefenseReasonsResponse } from "../typings/disputes/models";
import { DeleteDefenseDocumentRequest } from "../typings/disputes/models";
import { DeleteDefenseDocumentResponse } from "../typings/disputes/models";
import { SupplyDefenseDocumentRequest } from "../typings/disputes/models";
import { SupplyDefenseDocumentResponse } from "../typings/disputes/models";
import { IRequest } from "../typings/requestOptions";
export declare class DisputesAPI extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Accept a dispute
    * @param acceptDisputeRequest {@link AcceptDisputeRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link AcceptDisputeResponse }
    */
    acceptDispute(acceptDisputeRequest: AcceptDisputeRequest, requestOptions?: IRequest.Options): Promise<AcceptDisputeResponse>;
    /**
    * @summary Defend a dispute
    * @param defendDisputeRequest {@link DefendDisputeRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link DefendDisputeResponse }
    */
    defendDispute(defendDisputeRequest: DefendDisputeRequest, requestOptions?: IRequest.Options): Promise<DefendDisputeResponse>;
    /**
    * @summary Delete a defense document
    * @param deleteDefenseDocumentRequest {@link DeleteDefenseDocumentRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link DeleteDefenseDocumentResponse }
    */
    deleteDisputeDefenseDocument(deleteDefenseDocumentRequest: DeleteDefenseDocumentRequest, requestOptions?: IRequest.Options): Promise<DeleteDefenseDocumentResponse>;
    /**
    * @summary Get applicable defense reasons
    * @param defenseReasonsRequest {@link DefenseReasonsRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link DefenseReasonsResponse }
    */
    retrieveApplicableDefenseReasons(defenseReasonsRequest: DefenseReasonsRequest, requestOptions?: IRequest.Options): Promise<DefenseReasonsResponse>;
    /**
    * @summary Supply a defense document
    * @param supplyDefenseDocumentRequest {@link SupplyDefenseDocumentRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link SupplyDefenseDocumentResponse }
    */
    supplyDefenseDocument(supplyDefenseDocumentRequest: SupplyDefenseDocumentRequest, requestOptions?: IRequest.Options): Promise<SupplyDefenseDocumentResponse>;
}
export default DisputesAPI;
