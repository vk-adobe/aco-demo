import Service from "../../service";
import Client from "../../client";
import { PaymentLinkRequest, PaymentLinkResponse, UpdatePaymentLinkRequest } from "../../typings/checkout/models";
import { IRequest } from "../../typings/requestOptions";
export declare class PaymentLinksApi extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Get a payment link
    * @param linkId {@link string } Unique identifier of the payment link.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PaymentLinkResponse }
    */
    getPaymentLink(linkId: string, requestOptions?: IRequest.Options): Promise<PaymentLinkResponse>;
    /**
    * @summary Create a payment link
    * @param paymentLinkRequest {@link PaymentLinkRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PaymentLinkResponse }
    */
    paymentLinks(paymentLinkRequest: PaymentLinkRequest, requestOptions?: IRequest.Options): Promise<PaymentLinkResponse>;
    /**
    * @summary Update the status of a payment link
    * @param linkId {@link string } Unique identifier of the payment link.
    * @param updatePaymentLinkRequest {@link UpdatePaymentLinkRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PaymentLinkResponse }
    */
    updatePaymentLink(linkId: string, updatePaymentLinkRequest: UpdatePaymentLinkRequest, requestOptions?: IRequest.Options): Promise<PaymentLinkResponse>;
}
