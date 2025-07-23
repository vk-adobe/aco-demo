import Service from "../../service";
import Client from "../../client";
import { CalculatePciStatusRequest, CalculatePciStatusResponse, GeneratePciDescriptionRequest, GeneratePciDescriptionResponse, GetPciQuestionnaireInfosResponse, GetPciQuestionnaireResponse, PciSigningRequest, PciSigningResponse } from "../../typings/legalEntityManagement/models";
import { IRequest } from "../../typings/requestOptions";
export declare class PCIQuestionnairesApi extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Calculate PCI status of a legal entity
    * @param id {@link string } The unique identifier of the legal entity to calculate PCI status.
    * @param calculatePciStatusRequest {@link CalculatePciStatusRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link CalculatePciStatusResponse }
    */
    calculatePciStatusOfLegalEntity(id: string, calculatePciStatusRequest: CalculatePciStatusRequest, requestOptions?: IRequest.Options): Promise<CalculatePciStatusResponse>;
    /**
    * @summary Generate PCI questionnaire
    * @param id {@link string } The unique identifier of the legal entity to get PCI questionnaire information.
    * @param generatePciDescriptionRequest {@link GeneratePciDescriptionRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link GeneratePciDescriptionResponse }
    */
    generatePciQuestionnaire(id: string, generatePciDescriptionRequest: GeneratePciDescriptionRequest, requestOptions?: IRequest.Options): Promise<GeneratePciDescriptionResponse>;
    /**
    * @summary Get PCI questionnaire
    * @param id {@link string } The legal entity ID of the individual who signed the PCI questionnaire.
    * @param pciid {@link string } The unique identifier of the signed PCI questionnaire.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link GetPciQuestionnaireResponse }
    */
    getPciQuestionnaire(id: string, pciid: string, requestOptions?: IRequest.Options): Promise<GetPciQuestionnaireResponse>;
    /**
    * @summary Get PCI questionnaire details
    * @param id {@link string } The unique identifier of the legal entity to get PCI questionnaire information.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link GetPciQuestionnaireInfosResponse }
    */
    getPciQuestionnaireDetails(id: string, requestOptions?: IRequest.Options): Promise<GetPciQuestionnaireInfosResponse>;
    /**
    * @summary Sign PCI questionnaire
    * @param id {@link string } The legal entity ID of the user that has a contractual relationship with your platform.
    * @param pciSigningRequest {@link PciSigningRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PciSigningResponse }
    */
    signPciQuestionnaire(id: string, pciSigningRequest: PciSigningRequest, requestOptions?: IRequest.Options): Promise<PciSigningResponse>;
}
