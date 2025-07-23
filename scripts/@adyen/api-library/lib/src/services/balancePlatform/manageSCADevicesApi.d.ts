import Service from "../../service";
import Client from "../../client";
import { AssociationFinaliseRequest, AssociationFinaliseResponse, AssociationInitiateRequest, AssociationInitiateResponse, RegisterSCAFinalResponse, RegisterSCARequest, RegisterSCAResponse, SearchRegisteredDevicesResponse } from "../../typings/balancePlatform/models";
import { IRequest } from "../../typings/requestOptions";
export declare class ManageSCADevicesApi extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Complete an association between an SCA device and a resource
    * @param deviceId {@link string } The unique identifier of the SCA device that you are associating with a resource.
    * @param associationFinaliseRequest {@link AssociationFinaliseRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link AssociationFinaliseResponse }
    */
    completeAssociationBetweenScaDeviceAndResource(deviceId: string, associationFinaliseRequest: AssociationFinaliseRequest, requestOptions?: IRequest.Options): Promise<AssociationFinaliseResponse>;
    /**
    * @summary Complete the registration of an SCA device
    * @param id {@link string } The unique identifier of the SCA device. You obtain this &#x60;id&#x60; in the response of a POST&amp;nbsp;[/registeredDevices](https://docs.adyen.com/api-explorer/balanceplatform/2/post/registeredDevices#responses-200-id) request.
    * @param registerSCARequest {@link RegisterSCARequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link RegisterSCAFinalResponse }
    */
    completeRegistrationOfScaDevice(id: string, registerSCARequest: RegisterSCARequest, requestOptions?: IRequest.Options): Promise<RegisterSCAFinalResponse>;
    /**
    * @summary Delete a registration of an SCA device
    * @param id {@link string } The unique identifier of the SCA device.
    * @param requestOptions {@link IRequest.Options }
    * @param paymentInstrumentId {@link string } The unique identifier of the payment instrument linked to the SCA device.
    */
    deleteRegistrationOfScaDevice(id: string, paymentInstrumentId?: string, requestOptions?: IRequest.Options): Promise<void>;
    /**
    * @summary Initiate an association between an SCA device and a resource
    * @param deviceId {@link string } The unique identifier of the SCA device that you are associating with a resource.
    * @param associationInitiateRequest {@link AssociationInitiateRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link AssociationInitiateResponse }
    */
    initiateAssociationBetweenScaDeviceAndResource(deviceId: string, associationInitiateRequest: AssociationInitiateRequest, requestOptions?: IRequest.Options): Promise<AssociationInitiateResponse>;
    /**
    * @summary Initiate the registration of an SCA device
    * @param registerSCARequest {@link RegisterSCARequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link RegisterSCAResponse }
    */
    initiateRegistrationOfScaDevice(registerSCARequest: RegisterSCARequest, requestOptions?: IRequest.Options): Promise<RegisterSCAResponse>;
    /**
    * @summary Get a list of registered SCA devices
    * @param requestOptions {@link IRequest.Options }
    * @param paymentInstrumentId {@link string } The unique identifier of a payment instrument. It limits the returned list to SCA devices associated to this payment instrument.
    * @param pageNumber {@link number } The index of the page to retrieve. The index of the first page is 0 (zero).  Default: 0.
    * @param pageSize {@link number } The number of items to have on a page.  Default: 20. Maximum: 100.
    * @return {@link SearchRegisteredDevicesResponse }
    */
    listRegisteredScaDevices(paymentInstrumentId?: string, pageNumber?: number, pageSize?: number, requestOptions?: IRequest.Options): Promise<SearchRegisteredDevicesResponse>;
}
