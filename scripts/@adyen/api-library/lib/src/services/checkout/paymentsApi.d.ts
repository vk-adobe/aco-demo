import Service from "../../service";
import Client from "../../client";
import { CardDetailsRequest, CardDetailsResponse, CreateCheckoutSessionRequest, CreateCheckoutSessionResponse, PaymentDetailsRequest, PaymentDetailsResponse, PaymentMethodsRequest, PaymentMethodsResponse, PaymentRequest, PaymentResponse, SessionResultResponse } from "../../typings/checkout/models";
import { IRequest } from "../../typings/requestOptions";
export declare class PaymentsApi extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Get the brands and other details of a card
    * @param cardDetailsRequest {@link CardDetailsRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link CardDetailsResponse }
    */
    cardDetails(cardDetailsRequest: CardDetailsRequest, requestOptions?: IRequest.Options): Promise<CardDetailsResponse>;
    /**
    * @summary Get the result of a payment session
    * @param sessionId {@link string } A unique identifier of the session.
    * @param requestOptions {@link IRequest.Options }
    * @param sessionResult {@link string } The &#x60;sessionResult&#x60; value from the Drop-in or Component.
    * @return {@link SessionResultResponse }
    */
    getResultOfPaymentSession(sessionId: string, sessionResult?: string, requestOptions?: IRequest.Options): Promise<SessionResultResponse>;
    /**
    * @summary Get a list of available payment methods
    * @param paymentMethodsRequest {@link PaymentMethodsRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PaymentMethodsResponse }
    */
    paymentMethods(paymentMethodsRequest: PaymentMethodsRequest, requestOptions?: IRequest.Options): Promise<PaymentMethodsResponse>;
    /**
    * @summary Start a transaction
    * @param paymentRequest {@link PaymentRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PaymentResponse }
    */
    payments(paymentRequest: PaymentRequest, requestOptions?: IRequest.Options): Promise<PaymentResponse>;
    /**
    * @summary Submit details for a payment
    * @param paymentDetailsRequest {@link PaymentDetailsRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PaymentDetailsResponse }
    */
    paymentsDetails(paymentDetailsRequest: PaymentDetailsRequest, requestOptions?: IRequest.Options): Promise<PaymentDetailsResponse>;
    /**
    * @summary Create a payment session
    * @param createCheckoutSessionRequest {@link CreateCheckoutSessionRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link CreateCheckoutSessionResponse }
    */
    sessions(createCheckoutSessionRequest: CreateCheckoutSessionRequest, requestOptions?: IRequest.Options): Promise<CreateCheckoutSessionResponse>;
}
