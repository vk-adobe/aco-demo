import Service from "../../service";
import Client from "../../client";
import { BusinessLines, DataReviewConfirmationResponse, LegalEntity, LegalEntityInfo, LegalEntityInfoRequiredType, VerificationErrors } from "../../typings/legalEntityManagement/models";
import { IRequest } from "../../typings/requestOptions";
export declare class LegalEntitiesApi extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Check a legal entity\'s verification errors
    * @param id {@link string } The unique identifier of the legal entity.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link VerificationErrors }
    */
    checkLegalEntitysVerificationErrors(id: string, requestOptions?: IRequest.Options): Promise<VerificationErrors>;
    /**
    * @summary Confirm data review
    * @param id {@link string } The unique identifier of the legal entity.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link DataReviewConfirmationResponse }
    */
    confirmDataReview(id: string, requestOptions?: IRequest.Options): Promise<DataReviewConfirmationResponse>;
    /**
    * @summary Create a legal entity
    * @param legalEntityInfoRequiredType {@link LegalEntityInfoRequiredType }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link LegalEntity }
    */
    createLegalEntity(legalEntityInfoRequiredType: LegalEntityInfoRequiredType, requestOptions?: IRequest.Options): Promise<LegalEntity>;
    /**
    * @summary Get all business lines under a legal entity
    * @param id {@link string } The unique identifier of the legal entity.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link BusinessLines }
    */
    getAllBusinessLinesUnderLegalEntity(id: string, requestOptions?: IRequest.Options): Promise<BusinessLines>;
    /**
    * @summary Get a legal entity
    * @param id {@link string } The unique identifier of the legal entity.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link LegalEntity }
    */
    getLegalEntity(id: string, requestOptions?: IRequest.Options): Promise<LegalEntity>;
    /**
    * @summary Update a legal entity
    * @param id {@link string } The unique identifier of the legal entity.
    * @param legalEntityInfo {@link LegalEntityInfo }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link LegalEntity }
    */
    updateLegalEntity(id: string, legalEntityInfo: LegalEntityInfo, requestOptions?: IRequest.Options): Promise<LegalEntity>;
}
