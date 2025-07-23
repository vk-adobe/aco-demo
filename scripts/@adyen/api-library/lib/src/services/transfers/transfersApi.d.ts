import Service from "../../service";
import Client from "../../client";
import { ApproveTransfersRequest, CancelTransfersRequest, FindTransfersResponse, ReturnTransferRequest, ReturnTransferResponse, Transfer, TransferData, TransferInfo } from "../../typings/transfers/models";
import { IRequest } from "../../typings/requestOptions";
export declare class TransfersApi extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Approve initiated transfers
    * @param approveTransfersRequest {@link ApproveTransfersRequest }
    * @param requestOptions {@link IRequest.Options }
    */
    approveInitiatedTransfers(approveTransfersRequest: ApproveTransfersRequest, requestOptions?: IRequest.Options): Promise<void>;
    /**
    * @summary Cancel initiated transfers
    * @param cancelTransfersRequest {@link CancelTransfersRequest }
    * @param requestOptions {@link IRequest.Options }
    */
    cancelInitiatedTransfers(cancelTransfersRequest: CancelTransfersRequest, requestOptions?: IRequest.Options): Promise<void>;
    /**
    * @summary Get all transfers
    * @param requestOptions {@link IRequest.Options }
    * @param balancePlatform {@link string } The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id).  Required if you don\&#39;t provide a &#x60;balanceAccountId&#x60; or &#x60;accountHolderId&#x60;.
    * @param accountHolderId {@link string } The unique identifier of the [account holder](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/accountHolders/{id}__queryParam_id).  Required if you don\&#39;t provide a &#x60;balanceAccountId&#x60; or &#x60;balancePlatform&#x60;.  If you provide a &#x60;balanceAccountId&#x60;, the &#x60;accountHolderId&#x60; must be related to the &#x60;balanceAccountId&#x60;.
    * @param balanceAccountId {@link string } The unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balanceAccounts/{id}__queryParam_id).  Required if you don\&#39;t provide an &#x60;accountHolderId&#x60; or &#x60;balancePlatform&#x60;.  If you provide an &#x60;accountHolderId&#x60;, the &#x60;balanceAccountId&#x60; must be related to the &#x60;accountHolderId&#x60;.
    * @param paymentInstrumentId {@link string } The unique identifier of the [payment instrument](https://docs.adyen.com/api-explorer/balanceplatform/latest/get/paymentInstruments/_id_).  To use this parameter, you must also provide a &#x60;balanceAccountId&#x60;, &#x60;accountHolderId&#x60;, or &#x60;balancePlatform&#x60;.  The &#x60;paymentInstrumentId&#x60; must be related to the &#x60;balanceAccountId&#x60; or &#x60;accountHolderId&#x60; that you provide.
    * @param reference {@link string } The reference you provided in the POST [/transfers](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers) request
    * @param category {@link &#39;bank&#39; | &#39;card&#39; | &#39;grants&#39; | &#39;internal&#39; | &#39;issuedCard&#39; | &#39;migration&#39; | &#39;platformPayment&#39; | &#39;topUp&#39; | &#39;upgrade&#39; } The type of transfer.  Possible values:   - **bank**: Transfer to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id) or a bank account.  - **internal**: Transfer to another [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id) within your platform.  - **issuedCard**: Transfer initiated by a Adyen-issued card.  - **platformPayment**: Fund movements related to payments that are acquired for your users.
    * @param createdSince {@link Date } Only include transfers that have been created on or after this point in time. The value must be in ISO 8601 format and not earlier than 6 months before the &#x60;createdUntil&#x60; date. For example, **2021-05-30T15:07:40Z**.
    * @param createdUntil {@link Date } Only include transfers that have been created on or before this point in time. The value must be in ISO 8601 format and not later than 6 months after the &#x60;createdSince&#x60; date. For example, **2021-05-30T15:07:40Z**.
    * @param cursor {@link string } The &#x60;cursor&#x60; returned in the links of the previous response.
    * @param limit {@link number } The number of items returned per page, maximum of 100 items. By default, the response returns 10 items per page.
    * @return {@link FindTransfersResponse }
    */
    getAllTransfers(balancePlatform?: string, accountHolderId?: string, balanceAccountId?: string, paymentInstrumentId?: string, reference?: string, category?: "bank" | "card" | "grants" | "internal" | "issuedCard" | "migration" | "platformPayment" | "topUp" | "upgrade", createdSince?: Date, createdUntil?: Date, cursor?: string, limit?: number, requestOptions?: IRequest.Options): Promise<FindTransfersResponse>;
    /**
    * @summary Get a transfer
    * @param id {@link string } Unique identifier of the transfer.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link TransferData }
    */
    getTransfer(id: string, requestOptions?: IRequest.Options): Promise<TransferData>;
    /**
    * @summary Return a transfer
    * @param transferId {@link string } The unique identifier of the transfer to be returned.
    * @param returnTransferRequest {@link ReturnTransferRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link ReturnTransferResponse }
    */
    returnTransfer(transferId: string, returnTransferRequest: ReturnTransferRequest, requestOptions?: IRequest.Options): Promise<ReturnTransferResponse>;
    /**
    * @summary Transfer funds
    * @param transferInfo {@link TransferInfo }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link Transfer }
    */
    transferFunds(transferInfo: TransferInfo, requestOptions?: IRequest.Options): Promise<Transfer>;
}
