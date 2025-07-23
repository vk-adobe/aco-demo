import Service from "../../service";
import Client from "../../client";
import { ListStoredPaymentMethodsResponse, StoredPaymentMethodRequest, StoredPaymentMethodResource } from "../../typings/checkout/models";
import { IRequest } from "../../typings/requestOptions";
export declare class RecurringApi extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Delete a token for stored payment details
    * @param storedPaymentMethodId {@link string } The unique identifier of the token.
    * @param requestOptions {@link IRequest.Options }
    * @param shopperReference {@link string } Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum length: 3 characters. &gt; Your reference must not include personally identifiable information (PII), for example name or email address.
    * @param merchantAccount {@link string } Your merchant account.
    */
    deleteTokenForStoredPaymentDetails(storedPaymentMethodId: string, shopperReference?: string, merchantAccount?: string, requestOptions?: IRequest.Options): Promise<void>;
    /**
    * @summary Get tokens for stored payment details
    * @param requestOptions {@link IRequest.Options }
    * @param shopperReference {@link string } Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum length: 3 characters. &gt; Your reference must not include personally identifiable information (PII), for example name or email address.
    * @param merchantAccount {@link string } Your merchant account.
    * @return {@link ListStoredPaymentMethodsResponse }
    */
    getTokensForStoredPaymentDetails(shopperReference?: string, merchantAccount?: string, requestOptions?: IRequest.Options): Promise<ListStoredPaymentMethodsResponse>;
    /**
    * @summary Create a token to store payment details
    * @param storedPaymentMethodRequest {@link StoredPaymentMethodRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link StoredPaymentMethodResource }
    */
    storedPaymentMethods(storedPaymentMethodRequest: StoredPaymentMethodRequest, requestOptions?: IRequest.Options): Promise<StoredPaymentMethodResource>;
}
