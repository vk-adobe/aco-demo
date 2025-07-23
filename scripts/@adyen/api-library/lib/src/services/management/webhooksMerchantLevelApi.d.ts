import Service from "../../service";
import Client from "../../client";
import { CreateMerchantWebhookRequest, GenerateHmacKeyResponse, ListWebhooksResponse, TestWebhookRequest, TestWebhookResponse, UpdateMerchantWebhookRequest, Webhook } from "../../typings/management/models";
import { IRequest } from "../../typings/requestOptions";
export declare class WebhooksMerchantLevelApi extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Generate an HMAC key
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param webhookId {@link string }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link GenerateHmacKeyResponse }
    */
    generateHmacKey(merchantId: string, webhookId: string, requestOptions?: IRequest.Options): Promise<GenerateHmacKeyResponse>;
    /**
    * @summary Get a webhook
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param webhookId {@link string } Unique identifier of the webhook configuration.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link Webhook }
    */
    getWebhook(merchantId: string, webhookId: string, requestOptions?: IRequest.Options): Promise<Webhook>;
    /**
    * @summary List all webhooks
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param requestOptions {@link IRequest.Options }
    * @param pageNumber {@link number } The number of the page to fetch.
    * @param pageSize {@link number } The number of items to have on a page, maximum 100. The default is 10 items on a page.
    * @return {@link ListWebhooksResponse }
    */
    listAllWebhooks(merchantId: string, pageNumber?: number, pageSize?: number, requestOptions?: IRequest.Options): Promise<ListWebhooksResponse>;
    /**
    * @summary Remove a webhook
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param webhookId {@link string } Unique identifier of the webhook configuration.
    * @param requestOptions {@link IRequest.Options }
    */
    removeWebhook(merchantId: string, webhookId: string, requestOptions?: IRequest.Options): Promise<void>;
    /**
    * @summary Set up a webhook
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param createMerchantWebhookRequest {@link CreateMerchantWebhookRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link Webhook }
    */
    setUpWebhook(merchantId: string, createMerchantWebhookRequest: CreateMerchantWebhookRequest, requestOptions?: IRequest.Options): Promise<Webhook>;
    /**
    * @summary Test a webhook
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param webhookId {@link string } Unique identifier of the webhook configuration.
    * @param testWebhookRequest {@link TestWebhookRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link TestWebhookResponse }
    */
    testWebhook(merchantId: string, webhookId: string, testWebhookRequest: TestWebhookRequest, requestOptions?: IRequest.Options): Promise<TestWebhookResponse>;
    /**
    * @summary Update a webhook
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param webhookId {@link string } Unique identifier of the webhook configuration.
    * @param updateMerchantWebhookRequest {@link UpdateMerchantWebhookRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link Webhook }
    */
    updateWebhook(merchantId: string, webhookId: string, updateMerchantWebhookRequest: UpdateMerchantWebhookRequest, requestOptions?: IRequest.Options): Promise<Webhook>;
}
