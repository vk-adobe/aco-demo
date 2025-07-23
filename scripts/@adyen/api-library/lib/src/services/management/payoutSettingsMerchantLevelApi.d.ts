import Service from "../../service";
import Client from "../../client";
import { PayoutSettings, PayoutSettingsRequest, PayoutSettingsResponse, UpdatePayoutSettingsRequest } from "../../typings/management/models";
import { IRequest } from "../../typings/requestOptions";
export declare class PayoutSettingsMerchantLevelApi extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Add a payout setting
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param payoutSettingsRequest {@link PayoutSettingsRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PayoutSettings }
    */
    addPayoutSetting(merchantId: string, payoutSettingsRequest: PayoutSettingsRequest, requestOptions?: IRequest.Options): Promise<PayoutSettings>;
    /**
    * @summary Delete a payout setting
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param payoutSettingsId {@link string } The unique identifier of the payout setting.
    * @param requestOptions {@link IRequest.Options }
    */
    deletePayoutSetting(merchantId: string, payoutSettingsId: string, requestOptions?: IRequest.Options): Promise<void>;
    /**
    * @summary Get a payout setting
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param payoutSettingsId {@link string } The unique identifier of the payout setting.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PayoutSettings }
    */
    getPayoutSetting(merchantId: string, payoutSettingsId: string, requestOptions?: IRequest.Options): Promise<PayoutSettings>;
    /**
    * @summary Get a list of payout settings
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PayoutSettingsResponse }
    */
    listPayoutSettings(merchantId: string, requestOptions?: IRequest.Options): Promise<PayoutSettingsResponse>;
    /**
    * @summary Update a payout setting
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param payoutSettingsId {@link string } The unique identifier of the payout setting.
    * @param updatePayoutSettingsRequest {@link UpdatePayoutSettingsRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PayoutSettings }
    */
    updatePayoutSetting(merchantId: string, payoutSettingsId: string, updatePayoutSettingsRequest: UpdatePayoutSettingsRequest, requestOptions?: IRequest.Options): Promise<PayoutSettings>;
}
