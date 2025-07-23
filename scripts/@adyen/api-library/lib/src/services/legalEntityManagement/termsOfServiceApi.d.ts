import Service from "../../service";
import Client from "../../client";
import { AcceptTermsOfServiceRequest, AcceptTermsOfServiceResponse, CalculateTermsOfServiceStatusResponse, GetAcceptedTermsOfServiceDocumentResponse, GetTermsOfServiceAcceptanceInfosResponse, GetTermsOfServiceDocumentRequest, GetTermsOfServiceDocumentResponse } from "../../typings/legalEntityManagement/models";
import { IRequest } from "../../typings/requestOptions";
export declare class TermsOfServiceApi extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Accept Terms of Service
    * @param id {@link string } The unique identifier of the legal entity.  For sole proprietorships, this is the individual legal entity ID of the owner.  For organizations, this is the ID of the organization.  For legal representatives of individuals, this is the ID of the individual.
    * @param termsofservicedocumentid {@link string } The unique identifier of the Terms of Service document.
    * @param acceptTermsOfServiceRequest {@link AcceptTermsOfServiceRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link AcceptTermsOfServiceResponse }
    */
    acceptTermsOfService(id: string, termsofservicedocumentid: string, acceptTermsOfServiceRequest: AcceptTermsOfServiceRequest, requestOptions?: IRequest.Options): Promise<AcceptTermsOfServiceResponse>;
    /**
    * @summary Get accepted Terms of Service document
    * @param id {@link string } The unique identifier of the legal entity. For sole proprietorship, this is the individual legal entity ID of the owner. For organizations, this is the ID of the organization.
    * @param termsofserviceacceptancereference {@link string } An Adyen-generated reference for the accepted Terms of Service.
    * @param requestOptions {@link IRequest.Options }
    * @param termsOfServiceDocumentFormat {@link string } The format of the Terms of Service document. Possible values: **JSON**, **PDF**, or **TXT**
    * @return {@link GetAcceptedTermsOfServiceDocumentResponse }
    */
    getAcceptedTermsOfServiceDocument(id: string, termsofserviceacceptancereference: string, termsOfServiceDocumentFormat?: string, requestOptions?: IRequest.Options): Promise<GetAcceptedTermsOfServiceDocumentResponse>;
    /**
    * @summary Get Terms of Service document
    * @param id {@link string } The unique identifier of the legal entity. For sole proprietorships, this is the individual legal entity ID of the owner. For organizations, this is the ID of the organization.
    * @param getTermsOfServiceDocumentRequest {@link GetTermsOfServiceDocumentRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link GetTermsOfServiceDocumentResponse }
    */
    getTermsOfServiceDocument(id: string, getTermsOfServiceDocumentRequest: GetTermsOfServiceDocumentRequest, requestOptions?: IRequest.Options): Promise<GetTermsOfServiceDocumentResponse>;
    /**
    * @summary Get Terms of Service information for a legal entity
    * @param id {@link string } The unique identifier of the legal entity. For sole proprietorships, this is the individual legal entity ID of the owner. For organizations, this is the ID of the organization.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link GetTermsOfServiceAcceptanceInfosResponse }
    */
    getTermsOfServiceInformationForLegalEntity(id: string, requestOptions?: IRequest.Options): Promise<GetTermsOfServiceAcceptanceInfosResponse>;
    /**
    * @summary Get Terms of Service status
    * @param id {@link string } The unique identifier of the legal entity. For sole proprietorships, this is the individual legal entity ID of the owner. For organizations, this is the ID of the organization.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link CalculateTermsOfServiceStatusResponse }
    */
    getTermsOfServiceStatus(id: string, requestOptions?: IRequest.Options): Promise<CalculateTermsOfServiceStatusResponse>;
}
